"use client";
import { db, storage } from "@/firebase";
import {
  FaceSmileIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

import { useSession, signOut } from "next-auth/react";
import { useRef, useState } from "react";
export default function Input() {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);

  async function getDoc() {
    const docRef = await addDoc(collection(db, "posts"), {
      id: session?.user.uid,
      text: input,
      userImg: session?.user.image,
      timestamp: serverTimestamp(),
      name: session?.user.name,
      username: session?.user.username,
    });
    return docRef;
  }

  async function sendPost() {
    if (loading) return;
    setLoading(true);
    const docRef = await getDoc();
    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }
    setInput("");
    setSelectedFile("");
    setLoading(false);
  }
  const imageHandler = function (e: React.SyntheticEvent<HTMLInputElement>) {
    setSelectedFile("");
    const reader = new FileReader();
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      const file = e.currentTarget.files[0];
      reader.readAsDataURL(file);
    }
    reader.onload = (readerEvent) => {
      console.log(readerEvent.target?.result);
      setSelectedFile(readerEvent.target?.result);
    };
    console.log(selectedFile);
  };
  return (
    <>
      {session && (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
          <img
            src={session?.user?.image || ""}
            alt="user-img"
            className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
            onClick={() => {
              signOut();
            }}
          />
          <div className="w-full divide-y divide-gray-200">
            <div className="">
              <textarea
                rows={2}
                placeholder="What's happening?"
                className="w-full rounded-lg border-gray-300"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                value={input}
              ></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <div className="flex">
                <label>
                  <input
                    type="file"
                    hidden
                    ref={filePickerRef}
                    onChange={imageHandler}
                    accept="image/*"
                  />
                  <PhotoIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"></PhotoIcon>
                </label>
                <FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
              </div>

              <button
                className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-semibold shadow-md hover:brightness-95 disabled:opacity-50"
                onClick={sendPost}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
      {selectedFile && (
        <div className="w-full px-4 py-2">
          <div className="relative">
            <XMarkIcon
              onClick={() => setSelectedFile("")}
              className="h-10 text-red-800 absolute cursor-pointer shadow-md shadow-red-500 rounded-full border-red-500 border-2 left-4 top-4"
            />
            <img
              src={selectedFile}
              className={`${loading && "animate-pulse"}`}
            />
          </div>
        </div>
      )}
    </>
  );
}

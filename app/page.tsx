import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Head from "next/head";
import Image from "next/image";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <main className="flex min-h-screen max-w-7xl mx-auto lg:space-x-3">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </>
  );
}

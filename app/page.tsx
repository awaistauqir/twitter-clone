import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <main className="flex min-h-screen max-w-7xl mx-auto">
        <Sidebar />
      </main>
    </>
  );
}

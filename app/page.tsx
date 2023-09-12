import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Head from "next/head";
import Widgets from "@/components/Widgets";
async function fetchNews() {
  const response = await fetch(
    "https://saurav.tech/NewsAPI/everything/cnn.json"
  );
  const news = await response.json();
  return news;
}
async function fetchUsers() {
  const response = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  );
  const randomUsers = await response.json();
  return randomUsers;
}

export default async function Home() {
  const newsResults = await fetchNews();
  const randomUsers = await fetchUsers();
  console.log(randomUsers.login);

  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <main className="flex min-h-screen max-w-7xl mx-auto lg:space-x-3">
        <Sidebar />
        <Feed />
        <Widgets
          articles={newsResults.articles}
          randomUsers={randomUsers.results}
        />
      </main>
    </>
  );
}

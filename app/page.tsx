import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";
import { getServerSession } from "next-auth/next";

import { authOptions } from "./api/auth/[...nextauth]/route";
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

  const session = await getServerSession(authOptions);

  // if (!session?.user) {
  //   redirect("/sign-in");
  // }

  return (
    <>
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

import { Timestamp } from "firebase/firestore";

export type Article = {
  url: string;
  title: string;
  source: {
    id: string;
    name: string;
  };
};
export type Post = {
  uid: string;
  id: string;
  name: string;
  username: string;
  userImg: string;
  image: string;
  tweet: string;
  timestamp: Timestamp;
};
export type User = {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
    username: string;
  };
  picture: {
    thumbnail: string;
  };
};

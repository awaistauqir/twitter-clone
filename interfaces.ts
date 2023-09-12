export type Article = {
  url: string;
  title: string;
  source: {
    id: string;
    name: string;
  };
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

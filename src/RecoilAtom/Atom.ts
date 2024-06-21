import { atom } from "recoil";

export interface IStarRating {
  score: number;
}

export const starRating = atom<IStarRating[]>({
  key: "starRating",
  default: [],
});

export interface IBean {
  id: number;
  enName: string;
  krName: string;
  score: number;
  info: {
    country: string;
    roastery: string;
    region: string;
    altitude: number;
    producer: string;
    variety: string;
    process: string;
  };
  productImage: string;
}

export interface IBeansResponse {
  beans: [IBean];
}

export interface Coffee {
  id: number;
  name: {
    KR: string;
    EN: string;
  };
  price: number;
  capacity: number;
  note: {
    flavor: string[];
    acidity: number;
    body: number;
  };
  roasting: {
    roasting_machine: string;
    roasting_color: number;
    roasting_level: (number | string)[];
  };
}

export interface ProductData {
  coffees: Coffee[];
}

export const beansState = atom<IBeansResponse[]>({
  key: "beans",
  default: [],
});

export interface IBeanDetail {
  uid: string;
  id: number;
  name: string;
  region: string;
  roastery: string;
  variety: string;
  flavour: string;
  process: string;
  img: Array<{ url: string }>;
  score: number;
}

export interface User {
  id: string;
  index: string;
  userId: string;
  userImg: string;
  coment: string;
  score: number;
}

export interface IUsersResponse {
  users: User[];
}

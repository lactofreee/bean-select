import { atom } from "recoil";

export interface IStarRating {
  score: number;
}

export const starRating = atom<IStarRating[]>({
  key: "starRating",
  default: [],
});

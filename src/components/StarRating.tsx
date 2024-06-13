import { useRecoilState } from "recoil";
import { starRating } from "../RecoilAtom/Atom";

function StarRating() {
  const [rating, setRating] = useRecoilState(starRating);
  return <div></div>;
}

export default StarRating;

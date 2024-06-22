import { ChangeEvent, FormEvent, useState } from "react";
import { BASE_URL } from "../routes/api";
import { v4 as uuidv4 } from "uuid";
import StarRating from "../components/StarRating";
import StarRatingComponent from "../components/StarRatingComponent";
import styled from "styled-components";

const MyForm = styled.form`
  display: flex;
  padding-bottom: 40px;
`;

const InPutDiv = styled.div`
  display: flex;
  gap: 10px;
`;

interface FormData {
  id: string;
  userComment: string;
  score: number;
}

function PostData() {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    userComment: "",
    score: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataToSubmit = {
      ...formData,
      uid: uuidv4(), // UUID 자동 생성
    };

    try {
      const res = await fetch(`${BASE_URL}/userComment`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      console.log("success", data);
      //reset the form

      setFormData({
        id: "",
        userComment: "",
        score: 0,
      });
    } catch (error) {
      console.error("Errpr:", error);
    }
  };

  return (
    <MyForm onSubmit={onSubmitHandler}>
      <InPutDiv>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        <label>User Comment:</label>
        <textarea
          name="userComment"
          value={formData.userComment}
          onChange={handleChange}
        />
        <label>Score:</label>
        <input
          type="number"
          name="score"
          value={formData.score}
          onChange={handleChange}
        />
      </InPutDiv>
      <StarRatingComponent />
      <button type="submit">Submit</button>
    </MyForm>
  );
}

export default PostData;

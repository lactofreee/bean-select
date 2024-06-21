import { ChangeEvent, FormEvent, useState } from "react";
import { BASE_URL } from "../routes/api";
import { v4 as uuidv4 } from "uuid";

interface FormData {
  id: string;
  userName: string;
  userComment: string;
}

function PostData() {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    userName: "",
    userComment: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        userName: "",
        userComment: "",
      });
    } catch (error) {
      console.error("Errpr:", error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          User Name:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          User Comment:
          <textarea
            name="userComment"
            value={formData.userComment}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostData;

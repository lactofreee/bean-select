import { useQuery } from "react-query";
import { fetchUserComment } from "../routes/api";
import { IUsersResponse } from "../RecoilAtom/Atom";
import styled from "styled-components";
import StarRating from "./ShowStarRating";
import { FaUserAlt } from "react-icons/fa";

const Container = styled.div``;

const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  border-bottom: 1px solid;
`;

const UserProfile = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const UserImg = styled.div`
  background-color: #D7D7D0;
  padding: 8px 10px;
  border-radius: 50px;
`;

const UserInfo = styled.div`
  padding-left: 15px;
`;

const UserName = styled.h3``;

const Comment = styled.h3``;

function ShowComments() {
  const { isLoading: isUserInfoLoading, data: usersData } =
    useQuery<IUsersResponse>("userComment", fetchUserComment);

  return (
    <Container>
      {isUserInfoLoading ? (
        <h1>Loading...</h1>
      ) : (
        usersData?.users.map((user) => (
          <CommentBody key={user.uid}>
            <UserProfile>
              <UserImg>
                <FaUserAlt />
              </UserImg>
              <UserInfo>
                <UserName>{user.comments.id}</UserName>
                <StarRating score={user.comments.score}></StarRating>
              </UserInfo>
            </UserProfile>
            <Comment>{user.comments.userComment}</Comment>
            <hr />
          </CommentBody>
        ))
      )}
    </Container>
  );
}

export default ShowComments;

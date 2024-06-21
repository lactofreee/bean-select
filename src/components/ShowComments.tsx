import { useQuery } from "react-query";
import { fetchUserInfo } from "../routes/api";
import { IUsersResponse } from "../RecoilAtom/Atom";
import styled from "styled-components";
import StarRating from "./StarRating";

const Container = styled.div`
`;

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

const UserImg = styled.img`
  height: 50px;
  border-radius: 50px;
`;

const UserInfo = styled.div`
  padding-left: 15px;
`;

const UserName = styled.h3``;


const Comment = styled.h3``;

function ShowComments() {
  const { isLoading: isUserInfoLoading, data: usersData } =
    useQuery<IUsersResponse>("userInfo", fetchUserInfo);

  return (
    <Container>
      {isUserInfoLoading ? (
        <h1>Loading...</h1>
      ) : (
        usersData?.users.map((user) => (
          <CommentBody key={user.index}>
            <UserProfile>
              <UserImg src={user.userImg} alt={user.id} />
              <UserInfo>
                <UserName>{user.userId}</UserName>
                <StarRating score={user.score}></StarRating>
              </UserInfo>
            </UserProfile>
            <Comment>{user.coment}</Comment>
            <hr/>
          </CommentBody>
        ))
      )}
    </Container>
  );
}

export default ShowComments;

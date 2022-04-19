import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "../../hooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Gif = styled.img`
  height: 400px;
  background-size: cover;
`;

const LogoutBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  background-color: #d64615;
  color: white;
  padding: 1rem 4rem;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const ProfilePage = () => {
  const [, setPersistedProfile] = useLocalStorage("profile");
  const navigate = useNavigate();

  function handleLogout() {
    setPersistedProfile({});
    navigate("/");
    navigate(0);
  }

  return (
    <Container>
      <Gif src="https://media4.giphy.com/media/26u4lOMA8JKSnL9Uk/200.webp?cid=ecf05e47jfc9zz7vjglu6klaq03gmw47svrkb8wmwlncta42&rid=200.webp&ct=g" />
      <h1>I am so done!</h1>
      <LogoutBtn onClick={handleLogout}>Log out</LogoutBtn>
    </Container>
  );
};

export default ProfilePage;

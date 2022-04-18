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
const LogoutBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  background-color: #d64615;
  color: white;
  padding: 1rem 2rem;
  color: white;
  margin: 0.5rem 0;
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
      <h1>
        🎊 Hi, Username, here is all the paid research that you created or
        joined
      </h1>
      <LogoutBtn onClick={handleLogout}>Log out</LogoutBtn>
    </Container>
  );
};

export default ProfilePage;

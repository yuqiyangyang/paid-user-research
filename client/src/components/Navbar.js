import styled from "styled-components";
import { FaCommentDollar, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem;
  background-color: #5d1049;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #f0e2e2;
  font-family: "Chango", cursive;
`;

const PullRight = styled.div`
  margin-left: auto;
`;

const Create = styled(Link)`
  text-decoration: none;
  color: #ff9791;
  font-weight: bold;
  padding: 0 1rem;
  justify-content: center;
`;

const SignUp = styled(Link)`
  text-decoration: none;
  color: #f0e2e2;
  font-weight: bold;
  padding: 0 1rem;
  justify-content: center;
`;

const Profile = styled(Link)`
  text-decoration: none;
  color: #f0e2e2;
  padding: 0 1rem;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo to="/">
        <FaCommentDollar size={24} /> Paid UserResearch
      </Logo>
      <PullRight>
        <Create to="/create">Create Post</Create>
        <SignUp to="/signup">Sign Up</SignUp>
        <Profile to="/profile">
          <FaRegUser size={20} color="#F0E2E2" />
        </Profile>
      </PullRight>
    </Container>
  );
};

export default Navbar;

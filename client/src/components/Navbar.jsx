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

const StyledLink = styled(Link)`
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

const Navbar = ({ isAuthenticated }) => {
  return (
    <Container>
      <Logo to="/">
        <FaCommentDollar size={24} /> Paid UserResearch
      </Logo>
      <PullRight>
        {isAuthenticated ? (
          <>
            <Create to="/create">Create Post</Create>
            <Profile to="/profile">
              <FaRegUser size={20} color="#F0E2E2" />
            </Profile>
          </>
        ) : (
          <>
            <StyledLink to="/signup">Sign Up</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </>
        )}
      </PullRight>
    </Container>
  );
};

export default Navbar;

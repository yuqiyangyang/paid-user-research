import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ProfilePage = () => {
  return (
    <Container>
      <h1>
        🎊 Hi, Username, here is all the paid research that you created or
        joined
      </h1>
    </Container>
  );
};

export default ProfilePage;

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem;
  font-size: 2rem;
`;

const NotFound = () => {
  return (
    <Container>
      <p>🙅</p>
      <p>This page does not exist</p>
    </Container>
  );
};

export default NotFound;

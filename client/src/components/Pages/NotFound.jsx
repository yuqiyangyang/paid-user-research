import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem;
  font-size: 2rem;
`;
const Gif = styled.img`
  height: 400px;
  background-size: cover;
`;

const NotFound = () => {
  return (
    <Container>
      <Gif src="https://media3.giphy.com/media/l0K3ZgnBpH8eKUPug/200w.webp?cid=ecf05e477pks3lvymdb0tb421wkvs6fj9najz2i6jtl24hmd&rid=200w.webp&ct=g" />
      <h1>Please Sign Up or Login to see this page</h1>
    </Container>
  );
};

export default NotFound;

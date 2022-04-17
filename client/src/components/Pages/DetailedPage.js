import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const PostTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const PostDescription = styled.div`
  font-size: 1.3rem;
`;

const Time = styled.div`
  color: grey;
`;

const Incentive = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  color: #4caf50;
`;

const PostImg = styled.img`
  width: 60%;
`;

const CTA = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 1.1rem;
  justify-content: center;
  width: 100px;
  background-color: #d64615;
  color: white;
  padding: 1rem 3rem;
  color: white;
  margin: 0.5rem 0;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const DetailedPage = () => {
  return (
    <Container>
      <PostImg src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHF1ZXN0aW9uc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" />
      <PostInfo>
        <Time>April 20 to April 30, 30min</Time>
        <PostTitle>Learn to play the piano with our app</PostTitle>
        <PostDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </PostDescription>

        <Incentive>Incentive: $50 </Incentive>
        <CTA>Join</CTA>
      </PostInfo>
    </Container>
  );
};

export default DetailedPage;

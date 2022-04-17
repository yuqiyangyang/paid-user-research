import styled from "styled-components";
import Post from "../Post";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Jumbotron = styled.div`
  background: url("https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1706&q=80")
    center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 30rem;
  width: 100%;
  display: flex;
  align-items: center;
  div {
    padding-left: 2rem;
    font-weight: 900;
    color: white;
    font-size: 2.5rem;
  }
`;

const GridDeck = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

//will be deleted
const dummyPosts = [
  {
    id: 1111,
    name: "Watch1",
    price: "$200",
    imgSrc:
      "https://media2.giphy.com/media/l41YouCUUcreUabHW/200w.webp?cid=ecf05e47w4p73wnugqpjh5n2w341rbwdjma8rmpqiombgnkj&rid=200w.webp&ct=g",
  },
  {
    id: 11112,
    name: "Watch2",
    price: "$300",
    imgSrc:
      "https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHF1ZXN0aW9uc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 11113,
    name: "Watch1",
    price: "$200",
    imgSrc:
      "https://cdn2.iconfinder.com/data/icons/smart-watch-glyph-filled/32/Smart_Watch__Play_Video-128.png",
  },
  {
    id: 1111,
    name: "Watch2",
    price: "$300",
    imgSrc:
      "https://cdn2.iconfinder.com/data/icons/smart-watch-glyph-filled/32/Smart_Watch__Play_Video-128.png",
  },
];

const HomePage = () => {
  return (
    <>
      <Jumbotron>
        <div>Welcome to Paid UserResearch</div>
      </Jumbotron>
      <Container>
        <GridDeck>
          {dummyPosts.map((post) => (
            <Post
              id={post.id}
              price={post.price}
              name={post.name}
              imgSrc={post.imgSrc}
            />
          ))}
        </GridDeck>
      </Container>
    </>
  );
};

export default HomePage;

import { useEffect, useState } from "react";
import styled from "styled-components";

import * as Api from "../../api";
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

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const posts = await Api.getAllPosts();
      setPosts(posts);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Jumbotron>
        <div>Welcome to Paid UserResearch</div>
      </Jumbotron>
      <Container>
        <GridDeck>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </GridDeck>
      </Container>
    </>
  );
};

export default HomePage;

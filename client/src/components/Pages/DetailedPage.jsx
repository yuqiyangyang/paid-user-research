import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../../hooks";
import * as Api from "../../api";

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

const CTA = styled.button`
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
  const [post, setPost] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [persistedProfile] = useLocalStorage("profile");
  const params = useParams();

  useEffect(() => {
    async function fetchPost() {
      const resp = await Api.getPost(params.id);
      setPost(resp);
    }

    fetchPost();
  }, [params.id]);

  function formatDate(date) {
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString("en-US", options);
  }

  async function handleJoinPost() {
    setSubmitting(true);
    const data = await Api.joinPost(params.id, persistedProfile._id);
    console.log(data);
    setSubmitting(false);

    // if (data.updated) {
    const resp = await Api.getPost(params.id);
    setPost(resp);
    // }

    window.alert(
      "Thank you for requesting to join this research. We will reach out to you soon!"
    );
  }

  const candidates = post?.candidates || [];
  const hasJoined = candidates.includes(persistedProfile._id);

  return (
    <Container>
      <PostImg src={post.imgSrc} />
      <PostInfo>
        <Time>{formatDate(post.date)} </Time>
        <Time>Duration: 30min</Time>
        <PostTitle>{post.title}</PostTitle>
        <PostDescription>{post.description}</PostDescription>

        <Incentive>Incentive: {post.price}</Incentive>
        {hasJoined ? (
          <CTA disabled>Pending</CTA>
        ) : (
          <CTA disabled={submitting} onClick={handleJoinPost}>
            Join
          </CTA>
        )}
      </PostInfo>
    </Container>
  );
};

export default DetailedPage;

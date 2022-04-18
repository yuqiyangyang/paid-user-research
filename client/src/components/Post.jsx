import styled from "styled-components";
import { Link } from "react-router-dom";

const PostCard = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  &:hover {
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const PostTitle = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  height: 1rem;
  text-align: center;
  overflow: hidden;
`;
const PostImg = styled.img`
  height: 100px;
  width: 200px;
  object-fit: cover;
`;
const Incentive = styled.div`
  color: #4caf50;
  height: 1rem;
  text-align: left;
  overflow: hidden;
`;

const Post = ({ post }) => {
  return (
    <PostCard to={`/post/${post._id}`}>
      <PostImg src={post.imgSrc} />
      <PostTitle>{post.title}</PostTitle>
      <Incentive>{post.price}</Incentive>
    </PostCard>
  );
};

export default Post;

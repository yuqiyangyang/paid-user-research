import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import * as Api from "../../api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 600px;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  margin-bottom: 1rem;
`;

const Create = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  background-color: #d64615;
  color: white;
  padding: 1rem 2rem;
  color: white;
  margin: 0.5rem 0;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Gif = styled.img`
  max-width: 250px;
  height: 200px;
  background-size: cover;
`;

const Alert = styled.p`
  border-radius: 2px;
  border: 1px solid #f0f0f0;
  padding: 1rem;
`;

const FormPage = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    const DEFAULT_IMG_SRC =
      "https://cdn2.iconfinder.com/data/icons/smart-watch-glyph-filled/32/Smart_Watch__Play_Video-128.png";
    const payload = {
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
      imgSrc: e.target.imgSrc.value || DEFAULT_IMG_SRC,
      date: e.target.date.value,
    };

    try {
      setSubmitting(true);
      const newPost = await Api.createPost(payload);
      navigate(`/post/${newPost._id}`);
    } catch (err) {
      setError(err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Container>
      <Gif src="https://media3.giphy.com/media/ptFfq8Grrb5AjePgum/200.webp?cid=ecf05e47ra8h7o67djogfizmsoviur7qnn80f1j4f6vlymjv&rid=200.webp&ct=g" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="title"
          name="title"
          placeholder="Research Title"
        />
        <Input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
        />
        <Input type="text" id="price" name="price" placeholder="Incentive" />
        <Input type="date" id="date" name="date" placeholder="date" />
        <Input
          type="url"
          id="imgSrc"
          name="imgSrc"
          pattern="https://.*"
          size="500"
          placeholder="post image url"
        />
        <Create disabled={submitting} type="submit">
          Create Post
        </Create>

        {error && <Alert>{error.message}</Alert>}
      </Form>
    </Container>
  );
};

export default FormPage;

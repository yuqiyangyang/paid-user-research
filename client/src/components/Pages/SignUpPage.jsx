import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "../../hooks";
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

const Submit = styled.button`
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

const SignUpPage = () => {
  const [, setPersistedProfile] = useLocalStorage("profile");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const profile = await Api.signupUser({
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value,
    });

    if (profile) {
      setPersistedProfile(profile);
      navigate("/");
      navigate(0);
    }
  }

  return (
    <Container>
      <Gif src="https://media2.giphy.com/media/l41YouCUUcreUabHW/200w.webp?cid=ecf05e47w4p73wnugqpjh5n2w341rbwdjma8rmpqiombgnkj&rid=200w.webp&ct=g" />
      <Form onSubmit={handleSubmit}>
        <Input type="email" id="email" name="email" placeholder="Email" />

        <Input type="text" id="name" name="name" placeholder="Your name" />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <Submit type="submit">Signup</Submit>
      </Form>
    </Container>
  );
};

export default SignUpPage;

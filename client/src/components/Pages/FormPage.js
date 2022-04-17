import styled from "styled-components";

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

const Create = styled.input`
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

const FormPage = () => {
  return (
    <Container>
      <Gif src="https://media3.giphy.com/media/ptFfq8Grrb5AjePgum/200.webp?cid=ecf05e47ra8h7o67djogfizmsoviur7qnn80f1j4f6vlymjv&rid=200.webp&ct=g" />
      <Form>
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
        <Input
          type="text"
          id="incentive"
          name="incentive"
          placeholder="Incentive"
        />
        <Input type="text" id="date" name="date" placeholder="date" />
        <Create type="submit" value="Create" />
      </Form>
    </Container>
  );
};

export default FormPage;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import HomePage from "./components/Pages/HomePage";
import DetailedPage from "./components/Pages/DetailedPage";
import SignUpPage from "./components/Pages/SignUpPage";
import ProfilePage from "./components/Pages/ProfilePage";
import FormPage from "./components/Pages/FormPage";

const Container = styled.nav`
  font-family: overpass;
`;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/post/:id" element={<DetailedPage />} />
          <Route exact path="/create" element={<FormPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

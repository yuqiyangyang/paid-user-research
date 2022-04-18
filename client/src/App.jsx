import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import HomePage from "./components/Pages/HomePage";
import DetailedPage from "./components/Pages/DetailedPage";
import SignUpPage from "./components/Pages/SignUpPage";
import LoginPage from "./components/Pages/LoginPage";
import ProfilePage from "./components/Pages/ProfilePage";
import FormPage from "./components/Pages/FormPage";
import NotFound from "./components/Pages/NotFound";

import { useLocalStorage } from "./hooks";

const Container = styled.nav`
  font-family: overpass;
`;

function App() {
  const [persistedProfile] = useLocalStorage("profile");
  const isAuthenticated = persistedProfile && persistedProfile.isAuthenticated;

  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} />
      <Container>
        {!isAuthenticated ? (
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<DetailedPage />} />
            <Route path="/create" element={<FormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        )}
      </Container>
    </BrowserRouter>
  );
}

export default App;

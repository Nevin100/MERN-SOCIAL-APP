import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage/HomePage.jsx";
import LoginPage from "./scenes/LoginPage/LoginPage.jsx";
import ProfilePage from "./scenes/ProfilePage/ProfilePage.jsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";

const App = () => {
  const mode = useSelector((state) => {
    state.mode;
  });
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

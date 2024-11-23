import React from "react";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/LoginPage";
import ProfilePage from "scenes/ProfilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";

const App = () => {
  const mode = useSelector((state) => {
    state.mode;
  });
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/homr" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

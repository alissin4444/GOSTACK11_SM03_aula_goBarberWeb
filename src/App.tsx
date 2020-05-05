import React from "react";

import GlobalStyle from "./styles/global";

import { AuthProvider } from "./hooks/AuthContext";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  </>
);

export default App;

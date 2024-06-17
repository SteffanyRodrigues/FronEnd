import React from "react";
import RoutesApp from "./routes/index";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";

import * as C from "./pages/Home/styles"; 

const App = () => {
  

return (

  <C.Container>
    <AuthProvider>
       <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
  </C.Container>
    );
};

export default App;

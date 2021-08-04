import "./App.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:category" component={ShopPage} />
          </Switch>
        </ScrollToTop>
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
html{
 font-size: 62.5%;
}

body{
  background-color:${(p) => p.theme.backgroundColorDefault};
  min-height:100vh;
  margin:0;
  color:black;
  font-family: ${(p) => p.theme.primaryfontFamily};
  box-sizing: border-box;
  overflow-x: hidden;
}
`;

export default App;

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "../components/SmoothScroll";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <SmoothScroll>
        <Component {...pageProps} />
      </SmoothScroll>
    </ThemeProvider>
  );
};

export default App;

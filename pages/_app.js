import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "../components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <SmoothScroll>
        <Component {...pageProps} />
        <Analytics />
      </SmoothScroll>
    </ThemeProvider>
  );
};

export default App;

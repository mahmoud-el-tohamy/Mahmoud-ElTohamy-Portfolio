import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "../components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { AnimatePresence, motion as Motion } from "framer-motion";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <SmoothScroll>
        <AnimatePresence mode="wait">
          <Motion.div
            key={router.locale}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Component {...pageProps} />
          </Motion.div>
        </AnimatePresence>
        <Analytics />
      </SmoothScroll>
    </ThemeProvider>
  );
};

export default App;

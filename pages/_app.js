import "../styles/globals.css";
import Layout from "../components/Layout";
import Navbar from "../components/Nav";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

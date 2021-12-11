import "../styles/globals.css";
import Layout from "../components/Layout";
import Navbar from "../components/Nav";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import Container from "../components/Container";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider>
        <Layout>
          <Navbar />
          <Container />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;

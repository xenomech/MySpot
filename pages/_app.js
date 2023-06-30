import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Footer, Navbar, Layout } from "components";
import { Inter, Poppins } from "next/font/google";

/* Layout wraps nav container and footer together */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "600"],
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem enableColorScheme attribute="class">
      <main className={`${inter.variable} ${poppins.variable}`}>
        <Layout>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </main>
    </ThemeProvider>
  );
}

export default MyApp;

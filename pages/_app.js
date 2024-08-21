import { ChakraProvider, Spinner } from "@chakra-ui/react";
import "@/styles/globals.css";
import { useRouter } from "next/router"; // Import useRouter hook
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const showNavbar = router.pathname === "/";

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(false));
    router.events.on("routeChangeComplete", (e) => setLoading(true));

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(false));
      router.events.off("routeChangeStart", (e) => setLoading(false));
      router.events.off("routeChangeComplete", (e) => setLoading(true));
    };
  }, [router.events]);

  const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: {
          fontFamily: "Georgia, serif",
        },
      },
    },
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        {!showNavbar && <Navbar menuColor="black" />}
        <Component {...pageProps} />

        <Footer />
      </ChakraProvider>
    </>
  );
}

import Head from "next/head";
import About from "./components/About";
import ButtonUp from "./components/ButtonUp";
import Carrousel from "./components/Carrousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Procedimiento from "./components/Procedimiento";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Head>
        <title>Envios Guro</title>
        <meta
          name="description"
          content={"Envio de Remesas a Venezuela y latinoamerica desde cualquier parte del mundo."}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/guro.ico" />
      </Head>

      <Navbar />
      <Hero />

      <About />

      <Procedimiento />

      <Contact />

      <ButtonUp />

      <Footer />

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
    </>
  );
}

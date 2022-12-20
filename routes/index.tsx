import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";

/**
 * Home首页
 * 1. bg-neu min-w-xs min-h-screen grid
 * 2. auto 1fr auto
 *
 * @return {*}  {JSX.Element}
 */
const Home: () => JSX.Element = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Chatbot</title>
      </Head>
      <div
        class="bg-neu min-w-xs min-h-screen grid"
        style={{
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <Header />
        <main></main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

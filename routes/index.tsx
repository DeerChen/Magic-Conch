import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import Content from "../islands/Content.tsx";
import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";

/**
 * Index首页
 * 1. bg-neu min-w-fit min-h-screen grid
 *    {gridTemplateRows: "auto 1fr auto"}
 *
 * @return {*}  {JSX.Element}
 */
const Index: () => JSX.Element = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Chatbot</title>
      </Head>
      <div
        class="bg-neu min-w-fit min-h-screen grid"
        style={{
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default Index;

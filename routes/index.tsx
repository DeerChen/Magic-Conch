import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import Layout from "../islands/Layout.tsx";

/**
 * Index首页
 *
 * @return {*}  {JSX.Element}
 */
const Index: () => JSX.Element = (): JSX.Element => (
  <>
    <Head>
      <title>Chatbot</title>
    </Head>
    <Layout />
  </>
);

export default Index;

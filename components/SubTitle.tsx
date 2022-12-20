import { JSX } from "preact";
import Link from "./Link.tsx";

/**
 * SubTitle副标题
 *
 * @return {*}  {JSX.Element}
 */
const SubTitle: () => JSX.Element = (): JSX.Element => (
  <>
    一款基于<Link href="https://beta.openai.com">
      OpenAI GPT
    </Link>的对话机器人
  </>
);

export default SubTitle;

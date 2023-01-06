import { JSX } from "preact";
import Card from "../components/Card.tsx";
import { ICardProps } from "../intf/props.ts";

/**
 * Convo对话
 * 1. mb-1 py-4 shadow-neu-inner max-h-11/12 rounded overflow-scroll
 *    {gridArea: "topHalf", minHeight: "50vh"}
 *
 * @return {*}  {JSX.Element}
 */
const Convo: () => JSX.Element = (): JSX.Element => {
  const convoArr: Array<ICardProps> = [];

  return (
    <div
      class="mb-1 py-4 shadow-neu-inner max-h-11/12 rounded overflow-scroll"
      style={{
        gridArea: "topHalf",
        minHeight: "50vh",
      }}
    >
      {convoArr.map((c: ICardProps): JSX.Element => (
        <Card right={c.right} avatar={c.avatar}>
          {c.children}
        </Card>
      ))}
    </div>
  );
};

export default Convo;

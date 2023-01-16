import { JSX } from "preact";
import { StateUpdater, useContext } from "preact/hooks";
import Card from "../components/Card.tsx";
import convoArrCtx from "../hooks/ctx/convoArrCtx.ts";
import { ICardProps } from "../intf/props.ts";

/**
 * Convo对话
 * 1. mb-1 py-4 shadow-neu-inner max-h-17/24 rounded overflow-scroll
 *    {gridArea: "topHalf", minHeight: "50vh"}
 *
 * @return {*}  {JSX.Element}
 */
const Convo: () => JSX.Element = (): JSX.Element => {
    const convoCtx: {
        convoArr: Array<ICardProps>;
        setConvoArr: StateUpdater<Array<ICardProps>>;
    } = useContext(convoArrCtx);

    return (
        <div
            class="mb-1 py-4 shadow-neu-inner max-h-17/24 rounded overflow-y-scroll"
            style={{
                gridArea: "topHalf",
                minHeight: "50vh",
            }}
        >
            {convoCtx.convoArr.map(
                (c: ICardProps): JSX.Element => (
                    <Card right={c.right} avatar={c.avatar}>
                        {c.children}
                    </Card>
                )
            )}
        </div>
    );
};

export default Convo;

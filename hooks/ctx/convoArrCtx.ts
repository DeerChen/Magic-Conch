import { Context, createContext } from "preact";
import { ConvoActionType } from "../../constants/convo.ts";
import { ICardProps } from "../../intf/props.ts";

const convoArrCtx: Context<
  {
    convoArr: Array<ICardProps>;
    setConvoArr:
      | ((
        action: {
          type: ConvoActionType;
          payload?: ICardProps;
        },
      ) => void)
      | (() => never);
  }
> = createContext({
  convoArr: [],
  setConvoArr: (): never => {
    throw new Error("未定义convoArrCtx");
  },
});

export default convoArrCtx;

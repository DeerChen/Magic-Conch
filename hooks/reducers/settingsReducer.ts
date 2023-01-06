import { ISettings } from "../../intf/context.ts";

const settingsReducer: (
  prevState: ISettings,
  updatedProps: Partial<ISettings>,
) => ISettings = (
  prevState: ISettings,
  updatedProps: Partial<ISettings>,
): ISettings => ({
  ...prevState,
  ...updatedProps,
});

export default settingsReducer;

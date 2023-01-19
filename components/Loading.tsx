import { JSX } from "preact";

/**
 * Loading加载中
 *
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Loading />
 */
const Loading: () => JSX.Element = (): JSX.Element => (
    <div class="animate-bounce">...</div>
);

export default Loading;

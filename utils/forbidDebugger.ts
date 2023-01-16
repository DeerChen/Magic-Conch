const doCheck: (num: number) => void = (num: number): void => {
    if (("" + num / num)["length"] !== 1 || num % 20 === 0) {
        (function (): void {}["constructor"]("debugger")());
    } else {
        (function (): void {}["constructor"]("debugger")());
    }
    doCheck(++num);
};

/**
 * 打开开发者调试工具就进调试
 *
 */
const infDebug: () => void = (): void => {
    setInterval((): void => doCheck(0), 1000);
};

export { infDebug };

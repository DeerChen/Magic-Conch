const tokenCalc: (str: string) => number = (str: string): number => {
  return str.replace(/[\u0391-\uFFE5]/g, "abc").length;
};

export default tokenCalc;

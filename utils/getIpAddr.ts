const getIpAddr: () => Promise<string> | undefined = ():
  | Promise<string>
  | undefined => {
  try {
    return fetch("https://api64.ipify.org", {
      mode: "cors",
    }).then(
      (res: Response): Promise<string> => res.text(),
    );
  } catch (err) {
    console.error(err);
  }

  try {
    return fetch("https://httpbin.org/get", {
      mode: "cors",
    }).then((res: Response) => res.json()).then((result): Promise<string> =>
      result["origin"]
    );
  } catch (err) {
    console.error(err);
  }
};

export default getIpAddr;

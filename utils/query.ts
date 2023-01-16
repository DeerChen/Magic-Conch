/**
 * fetch with timeout
 *
 * @param {string} url
 * @param {number} timeout
 * @param {RequestInit} [init]
 * @return {*}  {Promise<Response>}
 *
 * @example
    query(
        "https://httpbin.org/get",
        1000,
        {
            mode: "cors"
        }
    )
        .then((res: Response) => res.json())
        .then(data => data["origin"])
        .catch((err): void => {
            console.error(err);
        });
 */
const query: (
    url: string,
    timeout: number,
    init?: RequestInit
) => Promise<Response> = (
    url: string,
    timeout: number,
    init?: RequestInit
): Promise<Response> => {
    const controller: AbortController = new AbortController();

    const timeoutFn: (timeout: number) => Promise<Response> = (
        timeout: number
    ): Promise<Response> =>
        new Promise(
            (
                _resolve: (value: Response | PromiseLike<Response>) => void,
                reject: (reason?: any) => void
            ): void => {
                setTimeout((): void => {
                    // resolve(
                    //     new Response(`${url}请求超时`, {
                    //         status: 504,
                    //         statusText: "Timeout",
                    //     })
                    // );
                    reject(`请求${url}超时`);

                    controller.abort();
                }, timeout);
            }
        );

    return Promise.race([
        fetch(url, {
            ...init,
            signal: controller.signal,
        }),
        timeoutFn(timeout),
    ]);
};

export default query;

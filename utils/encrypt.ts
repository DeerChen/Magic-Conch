import { crypto, toHashString } from "std/crypto/mod.ts";

const encrypt: (passwd: string) => Promise<string> = async (
    passwd: string
): Promise<string> => {
    return toHashString(
        await crypto.subtle.digest("SHA-512", new TextEncoder().encode(passwd))
    );
};

export default encrypt;

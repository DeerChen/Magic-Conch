import { crypto, toHashString } from "std/crypto/mod.ts";

const encrypt = async (passwd: string) => {
    return toHashString(
        await crypto.subtle.digest("BLAKE3", new TextEncoder().encode(passwd))
    );
};

export default encrypt;

export const PASSWORD_1 = "adb0c3e070c72b6adeaf8021da88d77f856165e7e45d497eb57ca4ad3d63e35";
export const PASSWORD_2 = "67ecf8cd93f2c86c8f66c69c9811af59d7e3e12b5e7db6b9462bc2aba26";

export const hashString = async (source: string) => {
  const sourceBytes = new TextEncoder().encode(source);
  const digest = await crypto.subtle.digest("SHA-256", sourceBytes);
  const resultBytes = new Uint8Array(digest);
  return resultBytes.reduce(
    (byteString, nextByte) => `${byteString}${nextByte.toString(16)}`,
    '',
  );
};

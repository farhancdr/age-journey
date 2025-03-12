import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export const UserIpService = {
  getUserIpFromHeaders(headers: ReadonlyHeaders) {
    const forwardedFor = headers.get("x-forwarded-for");
    const realIp = headers.get("x-real-ip");

    console.log("🚀 ~ getUserIpFromHeaders ~ realIp:", realIp);
    console.log("🚀 ~ getUserIpFromHeaders ~ forwardedFor:", forwardedFor);

    if (forwardedFor) {
      return forwardedFor.split(" ,")[0].trim();
    }

    if (realIp) return realIp.trim();
    return "";
  },
};

"use server";

import { UserIpService } from "@/utils/UserIpService";
import { headers } from "next/headers";

export async function getUserIpAction() {
  const userIp = UserIpService.getUserIpFromHeaders(await headers());
  let userIp2 = "";

  const forwardedFor = (await headers()).get("x-forwarded-for");
  const realIp = (await headers()).get("x-real-ip");

  console.log("🚀 ~ getUserIpAction ~ realIp:", realIp);
  console.log("🚀 ~ getUserIpAction ~ forwardedFor:", forwardedFor);

  if (forwardedFor) {
    userIp2 = forwardedFor.split(" ,")[0].trim();
    return { userIp, userIp2 };
  }

  if (realIp) {
    userIp2 = realIp.trim();
    return { userIp: userIp2 };
  }
  return { userIp, userIp2 };
}

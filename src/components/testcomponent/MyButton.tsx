"use client";

import { getUserIpAction } from "@/app/actions/user-ip-action";
import { useEffect, useState } from "react";

export const MyButton = () => {
  const [loading, setLoading] = useState(false);
  const [ip, setIp] = useState("");
  const [ip2, setIp2] = useState("");

  useEffect(() => {
    const getUserIpFunc = async () => {
      setLoading(true);
      const { userIp, userIp2 } = await getUserIpAction();
      setIp(userIp);
      setIp2(userIp2 || "");
      setLoading(false);
    };
    getUserIpFunc();
  }, []);

  return (
    <>
      <div>{loading ? "Loading..." : ip + "======" + ip2}</div>
    </>
  );
};

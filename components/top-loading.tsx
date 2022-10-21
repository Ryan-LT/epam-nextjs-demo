import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const TopLoading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));
  }, []);

  return (
    <div
      className={`top-loading bg-cyan-500 fixed top-0 z-10 h-1 w-full ${
        !loading ? "hidden" : ""
      }`}
    />
  );
};

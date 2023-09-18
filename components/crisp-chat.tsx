"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("468a5b15-96b2-4f0f-8b1a-92cdd0cfecf9");
  }, []);

  return null;
};

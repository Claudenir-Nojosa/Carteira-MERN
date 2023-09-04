"use client";

import { useEffect } from "react";
import Cookie from "js-cookie";

const AuthGuard = ({ children, router }) => {
  const isAuthenticated = Cookie.get("auth_token");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? children : null;
};

export default AuthGuard;
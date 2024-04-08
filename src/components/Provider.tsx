"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

const Provider = ({
  children,
  session,
}: {
  children: JSX.Element;
  //   session: null;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
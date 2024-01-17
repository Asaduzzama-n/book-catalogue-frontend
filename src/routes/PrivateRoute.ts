import { useAppSelector } from "@/redux/hooks";

import React, { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.user);
  // if (isLoading) {
  //   return `<p>...Loading</p>`; // Return a loading indicator or message
  // }

  if (user?.email) {
    return children;
  }

  // Use an alternative syntax for JSX to avoid ESBuild issue
  return React.createElement(Navigate, {
    to: "/login",
    state: { from: location.pathname },
    replace: true,
  }) as JSX.Element;
}

import React, { ReactNode } from "react";
import Navbar from "../components/NavBar";

type PageContentProps = {
  children?: ReactNode;
};

export function PageContent(props: PageContentProps) {
  return <div className="center">{props.children}</div>;
}

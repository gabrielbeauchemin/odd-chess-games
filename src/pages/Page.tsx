import { ReactNode } from "react";
import Navbar from "../components/NavBar";

type PageProps = {
  children?: ReactNode;
};

export function Page(props: PageProps) {
  return (
    <div className="flexColumn">
      <Navbar />
      {props.children}
    </div>
  );
}

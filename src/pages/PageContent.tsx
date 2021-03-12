import { ReactNode } from "react";

type PageContentProps = {
  children?: ReactNode;
};

export function PageContent(props: PageContentProps) {
  return <div className="center">{props.children}</div>;
}

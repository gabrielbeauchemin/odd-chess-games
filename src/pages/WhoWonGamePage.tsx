import React from "react";
import { Page } from "./Page";
import { PageContent } from "./PageContent";

type WhoWinGamePageProps = {};

export function WhoWinGamePage(props: WhoWinGamePageProps) {
  return (
    <Page>
      <PageContent>Who won game</PageContent>
    </Page>
  );
}

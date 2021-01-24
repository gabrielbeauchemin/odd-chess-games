import React from "react";
import { Page } from "./Page";
import { PageContent } from "./PageContent";

type WelcomePageProps = {};

export function WelcomePage(props: WelcomePageProps) {
  return (
    <Page>
      <PageContent>Welcome</PageContent>
    </Page>
  );
}

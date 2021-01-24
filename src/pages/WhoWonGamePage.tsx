import React from "react";
import { ChessBoard } from "../components/ChessBoard";
import { Page } from "./Page";
import { PageContent } from "./PageContent";

type WhoWinGamePageProps = {};

export function WhoWinGamePage(props: WhoWinGamePageProps) {
  return (
    <Page>
      <PageContent>
        <div>Who won game</div>
        <div>
          <ChessBoard />
        </div>
      </PageContent>
    </Page>
  );
}

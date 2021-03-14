import React from "react";
import { ChessBoard } from "../components/ChessBoard";
import { Page } from "./Page";
import { PageContent } from "./PageContent";

export function WhoWinGamePage() {
  return (
    <Page>
      <PageContent>
        <div>Who wins game</div>
        <div>
          <ChessBoard />
        </div>
      </PageContent>
    </Page>
  );
}

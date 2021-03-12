import React from "react";
import { Page } from "./Page";
import { PageContent } from "./PageContent";
import style from "./WelcomePage.module.css";

export function WelcomePage() {
  return (
    <Page>
      <PageContent>
        <h3>Welcome</h3>
        <p>
          You will find on this site special chess games that I could not find
          else where. Enjoy!
        </p>
        <div className={style.GameImages}>
          <div>
            <a href="/who-won">
              <img src="whowins.png" width="100%" />
            </a>
          </div>
        </div>
      </PageContent>
    </Page>
  );
}

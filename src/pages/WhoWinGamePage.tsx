import React, { useEffect } from "react";
import { connect } from "react-redux";
import {WhoWinsGame} from "../components/WhoWinsGame";
import { WhoWinsModel } from "../redux/tactics/WhoWinsModel";
import { fetchRandomWhoWinsTacticsAction } from "../redux/tactics/WhoWinsTacticsActions";
import { Page } from "./Page";
import { PageContent } from "./PageContent";

type WhoWinsGamePageProps = {
  tactics: WhoWinsModel[];
  fetchRandomWhoWinsTactics: () => void;
};

function WhoWinsGamePage(props: WhoWinsGamePageProps) {
  useEffect(props.fetchRandomWhoWinsTactics, []);
  return (
    <Page>
      <PageContent>
          <WhoWinsGame />
      </PageContent>
    </Page>
  );
}

function mapStateToProps(state: any) {
  return {
    tactics: state.tactics.whoWins,
  };
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchRandomWhoWinsTactics: () => {
      dispatch(fetchRandomWhoWinsTacticsAction(20));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WhoWinsGamePage);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ChessBoard } from "../components/ChessBoard";
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
        <div>Who wins game</div>
        <div>
          <ChessBoard />
        </div>
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

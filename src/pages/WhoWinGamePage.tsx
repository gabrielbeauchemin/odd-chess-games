import React, { useEffect } from "react";
import { connect } from "react-redux";
import { WhoWinsGame } from "../components/WhoWinsGame";
import { WhoWinsModel } from "../redux/tactics/WhoWinsModel";
import {
  fetchRandomWhoWinsTacticsAction,
  popWhoWinsTacticsAction,
  receiveUserGuessWhoWinsAction,
} from "../redux/tactics/WhoWinsTacticsActions";
import { RootState } from "../store";
import { Page } from "./Page";
import { PageContent } from "./PageContent";

type WhoWinsGamePageProps = {
  currentTactic: WhoWinsModel | null;
  fetchRandomWhoWinsTactics: () => void;
  popWhoWinsTactics: () => void;
  receiveUserGuess: (
    isWhiteWinning: boolean,
    incrementScore: () => void,
    onUserGuessFailure: (message: string) => void
  ) => void;
};

function WhoWinsGamePage(props: WhoWinsGamePageProps) {
  useEffect(props.fetchRandomWhoWinsTactics, []);
  return (
    <Page>
      <PageContent>
        <WhoWinsGame
          currentTactic={props.currentTactic}
          popWhoWinsTactics={props.popWhoWinsTactics}
          receiveUserGuess={props.receiveUserGuess}
        />
      </PageContent>
    </Page>
  );
}

function mapStateToProps(state: RootState) {
  return {
    currentTactic: state.tactics.whoWins.current,
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchRandomWhoWinsTactics: () => {
      dispatch(fetchRandomWhoWinsTacticsAction(20));
    },
    popWhoWinsTactics: () => {
      dispatch(popWhoWinsTacticsAction());
    },
    receiveUserGuess: (
      isWhiteWinning: boolean,
      incrementScore: () => void,
      onUserGuessFailure: (message: string) => void
    ) => {
      dispatch(
        receiveUserGuessWhoWinsAction(
          isWhiteWinning,
          incrementScore,
          onUserGuessFailure
        )
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WhoWinsGamePage);

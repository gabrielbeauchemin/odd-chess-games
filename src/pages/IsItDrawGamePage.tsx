import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IsItDrawGame } from "../components/IsItDrawGame";
import { IsItDrawModel } from "../redux/tactics/IsItDrawModel";
import {
  fetchRandomIsItDrawTacticsAction,
  popIsItDrawTacticsAction,
  receiveUserGuessIsItDrawAction,
} from "../redux/tactics/IsItDrawTacticsActions";
import { RootState } from "../store";
import { Page } from "./Page";
import { PageContent } from "./PageContent";

type WhoWinsGamePageProps = {
  currentTactic: IsItDrawModel | null;
  fetchRandomIsItDrawTactics: () => void;
  popIsItDrawTactics: () => void;
  receiveUserGuess: (
    isItDrawUserGuess: boolean,
    incrementScore: () => void,
    onUserGuessFailure: (message: string) => void
  ) => void;
};

function IsItDrawGamePage(props: WhoWinsGamePageProps) {
  useEffect(props.fetchRandomIsItDrawTactics, []);
  return (
    <Page>
      <PageContent>
        <IsItDrawGame
          currentTactic={props.currentTactic}
          popIsItDrawTactics={props.popIsItDrawTactics}
          receiveUserGuess={props.receiveUserGuess}
        />
      </PageContent>
    </Page>
  );
}

function mapStateToProps(state: RootState) {
  return {
    currentTactic: state.tactics.isItDraw.current,
  };
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchRandomIsItDrawTactics: () => {
      dispatch(fetchRandomIsItDrawTacticsAction(20));
    },
    popIsItDrawTactics: () => {
      dispatch(popIsItDrawTacticsAction());
    },
    receiveUserGuess: (
      isItDrawUserGuess: boolean,
      incrementScore: () => void,
      onUserGuessFailure: (message: string) => void
    ) => {
      dispatch(
        receiveUserGuessIsItDrawAction(
          isItDrawUserGuess,
          incrementScore,
          onUserGuessFailure
        )
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IsItDrawGamePage);

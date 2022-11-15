import React from "react";
import "./App.css";
import { CounterScreen } from "./components/CounterScreen/CounterScreen";
import { Settings } from "./components/Settings/Settings";
import { ErrorScreen } from "./components/ErrorScreen/ErrorScren";
import { useSelector } from "react-redux";
import { RootState } from "./reduxstate/store";
import BtnWrapper from "./components/common/btnWrapper/BtnWrapper";

export const App = () => {
  debugger;
  const state = useSelector<RootState, RootState>((state) => state);
  const error = useSelector<RootState, string>(
    (state) => state.counter.data.error
  );

  return (
    <div className={"App__wrapper"}>
      <h1 className={"counter__title"}>Hello this is my Counter</h1>
      <div className="content__wrapper">
        <Settings />
      </div>
      <div className="content__wrapper">
        <div className={"counter__screen-wrapper"}>
          {error ? (
            <ErrorScreen />
          ) : (
            <div className={"counter"}>
              <CounterScreen />
            </div>
          )}
          <BtnWrapper />
        </div>
      </div>
    </div>
  );
};

export default App;

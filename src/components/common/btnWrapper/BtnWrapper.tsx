import React from "react";
import { SuperButton } from "./SuperButton/SuperButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reduxstate/store";
import { incrementCount, resetCount } from "../../../reduxstate/counterReducer";

const BtnWrapper = () => {
  const error = useSelector<RootState, string>(
    (state) => state.counter.data.error
  );
  const count = useSelector<RootState, number>(
    (state) => state.counter.data.count
  );
  const threshold = useSelector<RootState, number>(
    (state) => state.counter.data.threshold
  );
  const startValue = useSelector<RootState, number>(
    (state) => state.counter.data.startValue
  );
  const screenToggle = useSelector<RootState, boolean>(
    (state) => state.counter.data.screenToggle
  );
  const dispatch = useDispatch();

  const incrementCountHandler = () => {
    dispatch(incrementCount());
  };

  const resetCountHandler = () => {
    dispatch(resetCount());
  };
  return (
    <div className={"btn_wrapper"}>
      <SuperButton
        disabled={count === threshold || !screenToggle || !!error}
        onClick={incrementCountHandler}
      >
        inc
      </SuperButton>
      <SuperButton
        disabled={count === startValue || !screenToggle || !!error}
        onClick={resetCountHandler}
      >
        reset
      </SuperButton>
    </div>
  );
};

export default BtnWrapper;
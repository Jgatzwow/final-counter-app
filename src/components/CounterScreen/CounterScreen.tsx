import React, { FC } from "react";
import styles from "./CounterScreen.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../reduxstate/store";

export const CounterScreen: FC = () => {
  const greeting = useSelector<RootState, string>(
    (state) => state.counter.data.greeting
  );
  const count = useSelector<RootState, number>(
    (state) => state.counter.data.count
  );
  const threshold = useSelector<RootState, number>(
    (state) => state.counter.data.threshold
  );
  const screenToggle = useSelector<RootState, boolean>(
    (state) => state.counter.data.screenToggle
  );

  const displayCount = count.toLocaleString();
  const className = count === threshold ? styles.red__counter : styles.counter;

  if (!screenToggle) return <div>{greeting}</div>;
  return <div className={className}>{displayCount}</div>;
};

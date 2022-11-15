import React, { FC } from "react";
import styles from "./ErrorScreen.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../reduxstate/store";

export const ErrorScreen: FC = () => {
  const error = useSelector<RootState, string>(
    (state) => state.counter.data.error
  );

  return (
    <div className={"counter"}>
      <div className={styles.error}>{error}</div>
    </div>
  );
};

import React from 'react';
import {SuperButton} from '../common/btnWrapper/SuperButton/SuperButton';
import SuperInput from '../common/SuperInput';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../reduxstate/store';
import {
  changeCount,
  changeMaxVal,
  changeStartVal,
  changeThreshold,
  screenToggle,
  setError,
} from '../../reduxstate/counterReducer';

export const Settings = () => {
  debugger
  const EQUALITY_ERROR = "Start value should not equal max value";
  const NEGATIVE_INTEGER_ERROR = "Values should not be negative integers";
  const START_VAL_BIGGER_THAN_MAX_VAL_ERROR =
    "Starting value should not be bigger than max value";

  const error = useSelector<RootState, string>(
    (state) => state.counter.data.error
  );
  const startValue = useSelector<RootState, number>(
    (state) => state.counter.data.startValue
  );
  const maxValue = useSelector<RootState, number>(
    (state) => state.counter.data.maxValue
  );

  const dispatch = useDispatch();
  const resetDataHandler = () => {
    dispatch(setError(""));
    dispatch(changeCount(0));
    dispatch(screenToggle(false));
  };

  const onMaxValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxValInputsValue = Math.floor(e.currentTarget.valueAsNumber);
    dispatch(changeMaxVal(maxValInputsValue));
    if (startValue === maxValInputsValue) {
      dispatch(setError(EQUALITY_ERROR));
      return;
    }
    if (maxValInputsValue < 0) {
      dispatch(setError(NEGATIVE_INTEGER_ERROR));
      return;
    }
    if (startValue > maxValInputsValue) {
      dispatch(setError(START_VAL_BIGGER_THAN_MAX_VAL_ERROR));
      return;
    }
    resetDataHandler();
  };
  const onStartValueChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const startValInputsValue = Math.floor(e.currentTarget.valueAsNumber);
    dispatch(changeStartVal(startValInputsValue));
    if (startValInputsValue === maxValue) {
      dispatch(setError(EQUALITY_ERROR));
      return;
    }
    if (startValInputsValue < 0) {
      dispatch(setError(NEGATIVE_INTEGER_ERROR));
      return;
    }
    if (startValInputsValue > maxValue) {
      dispatch(setError(START_VAL_BIGGER_THAN_MAX_VAL_ERROR));
      return;
    }
    resetDataHandler();
  };

  const onSetCountBtnHandler = () => {
    if (startValue === maxValue) {
      dispatch(setError(EQUALITY_ERROR));
      return;
    }
    if (startValue < 0) {
      dispatch(setError(NEGATIVE_INTEGER_ERROR));
      return;
    }
    if (startValue > maxValue) {
      dispatch(setError(START_VAL_BIGGER_THAN_MAX_VAL_ERROR));
      return;
    }
    dispatch(setError(""));
    dispatch(changeCount(startValue));
    dispatch(changeThreshold(maxValue));
    dispatch(screenToggle(true));
  };
  const onEnterKeyPressHandler = (
    e: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (e.key === "Enter") {
      onSetCountBtnHandler();
    }
  };

  return (
    <div className={"settings__wrapper"}>
      <div className={"counter"}>
        <h2 className={"settings__title"}>max value:</h2>
        <SuperInput
          type={"number"}
          error={!!error}
          onChange={onMaxValueChangeHandler}
          value={maxValue.toString()}
        />
      </div>
      <div className={"counter"}>
        <h2 className={"settings__title"}>start value:</h2>
        <SuperInput
          error={!!error}
          type={"number"}
          onChange={onStartValueChangeHandler}
          value={startValue.toString()}
        />
      </div>
      <div className={"btn_wrapper"}>
        <SuperButton
          disabled={!!error}
          onKeyDown={onEnterKeyPressHandler}
          onClick={onSetCountBtnHandler}
        >
          set
        </SuperButton>
      </div>
    </div>
  );
};



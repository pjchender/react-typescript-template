import { RGBColorType } from './types';

// STEP 2-2: define action type
type ColorType = keyof RGBColorType; // 'red' | 'green' | 'blue'
export type ActionType = `ADJUST_${Uppercase<ColorType>}`; // "ADJUST_RED" | "ADJUST_GREEN" | "ADJUST_BLUE"
export interface IAction {
  type: ActionType;
  payload: number;
}

// STEP 2-1: define reducer
export const reducer = (state: RGBColorType, action: IAction): RGBColorType => {
  // STEP 2-3: define switch case
  switch (action.type) {
    case 'ADJUST_RED': {
      return {
        ...state,
        red: action.payload,
      };
    }
    case 'ADJUST_BLUE': {
      return {
        ...state,
        blue: action.payload,
      };
    }
    case 'ADJUST_GREEN': {
      return {
        ...state,
        green: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

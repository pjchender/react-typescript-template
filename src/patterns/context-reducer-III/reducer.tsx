//  STEP 1：建立 reducer
export type UserType = {
  id: number;
  name: string;
};

export enum STATUS {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type StateType = {
  status: `${STATUS}`;
  users: UserType[];
};

type DeleteUserType = {
  type: 'DELETE_USER';
  payload: {
    userId: number;
  };
};

type UpdateUsersType = {
  type: 'UPDATE_USERS';
  payload: {
    status: STATUS.SUCCESS;
    users: UserType[];
  };
};

type ChangeStatusType = {
  type: 'UPDATE_STATUS';
  payload: {
    status: `${STATUS}`;
  };
};

export type ActionType = UpdateUsersType | DeleteUserType | ChangeStatusType;

export const userReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'UPDATE_STATUS': {
      return {
        ...state,
        status: action.payload.status,
      };
    }
    case 'DELETE_USER': {
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId),
      };
    }
    case 'UPDATE_USERS': {
      return {
        ...state,
        users: action.payload.users,
        status: action.payload.status,
      };
    }
    default: {
      // @ts-expect-error: action.type should be never
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`[user-context] Unhandled action type: ${action.type}`);
    }
  }
};

export type DispatchType = (action: ActionType) => void;

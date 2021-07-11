//  STEP 1：建立 reducer
export type UserType = {
  id: number;
  name: string;
};

export type StateType = { users: UserType[] };

type DeleteUserType = {
  type: 'DELETE_USER';
  payload: {
    userId: number;
  };
};

type UpdateUsersType = {
  type: 'UPDATE_USERS';
  payload: {
    users: UserType[];
  };
};

export type ActionType = UpdateUsersType | DeleteUserType;

export const userReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'DELETE_USER': {
      return {
        users: state.users.filter(user => user.id !== action.payload.userId),
      };
    }
    case 'UPDATE_USERS': {
      return {
        users: action.payload.users,
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

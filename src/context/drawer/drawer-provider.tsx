import React, { useReducer, ReactNode } from 'react';
import { DrawerContext } from './drawer-context';
const initialState = {
  isOpen: false,
};

function reducer(state: { isOpen: any; }, action: { type: any; }) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}

interface Props {
    children?: ReactNode
}

export const DrawerProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};

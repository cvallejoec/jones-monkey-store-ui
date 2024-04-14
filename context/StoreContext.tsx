import { createContext, FC, ReactNode, useReducer, useEffect } from 'react';

import { useApi } from 'hooks';
import { Store } from 'utils/types';

interface StoreState {
  status: 'idle' | 'loading' | 'error';
  store: Store;
}

interface StoreContextValue extends StoreState {}

interface StoreProviderProps {
  children: ReactNode;
}

type GetStore = {
  type: 'GET_STORE';
  payload: Store;
};

type Error = {
  type: 'ERROR';
};

type Actions = GetStore | Error;

const initialState: StoreState = {
  status: 'loading',
  store: null,
};

const reducer = (state: StoreState, action: Actions): StoreState => {
  switch (action.type) {
    case 'GET_STORE':
      return {
        ...state,
        status: 'idle',
        store: action.payload,
      };
    case 'ERROR':
      return {
        ...state,
        status: 'error',
        store: null,
      };
    default:
      return state;
  }
};

export const StoreContext = createContext<StoreContextValue>(initialState);

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { get } = useApi();

  const getStore = async () => {
    try {
      const store = await get<Store>('/store');
      dispatch({ type: 'GET_STORE', payload: store });
    } catch (e) {
      console.error('getStore() ->', e);
      dispatch({ type: 'ERROR' });
    }
  };

  useEffect(() => {
    getStore();
  }, []);

  return (
    <StoreContext.Provider value={{ ...state }}>
      {state.status === 'loading' && (
        <div className="loading-overlay">
          <div className="bounce-loader">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
            <div className="bounce4"></div>
          </div>
        </div>
      )}

      {state.status === 'error' && (
        <div className="page-content">
          <section className="error-section d-flex flex-column justify-content-center align-items-center text-center pl-3 pr-3">
            <h1 className="mb-2 ls-m">Tienda no encontrada</h1>
            <img
              src="./images/subpages/404.png"
              alt="error 404"
              width="609"
              height="131"
            />
            <h4 className="mt-7 mb-0 ls-m text-uppercase">
              Ha ocurrido un error
            </h4>
            <p className="text-grey font-primary ls-m">
              No podemos encontrar la tienda solicitada. Por favor, inténtelo de
              nuevo.
            </p>
          </section>
        </div>
      )}

      {state.status === 'idle' && state.store && children}
    </StoreContext.Provider>
  );
};

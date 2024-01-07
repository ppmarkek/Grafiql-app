import { configureStore } from '@reduxjs/toolkit';
// import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { entry } from './slices/entrySlice';
import { requestBody } from './slices/requestSlice';
import { api } from './slices/querySlice';

export const createStore = () =>
  configureStore({
    reducer: {
      entry: entry.reducer,
      requestBody: requestBody.reducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export const setupStore = (preloadedState?: RootState) =>
  configureStore({
    reducer: {
      entry: entry.reducer,
      requestBody: requestBody.reducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState,
  });

export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<AppStore['getState']>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppStore = ReturnType<typeof createStore>;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTypedSelector } from '../store';

interface EntryState {
  entry: string | undefined;
}

const initialState = {
  entry:
    localStorage.getItem('entry_gql_point') ||
    process.env.REACT_APP_DEFAULT_GQL_API ||
    undefined,
} as EntryState;

export const entry = createSlice({
  name: 'entry',
  initialState,
  reducers: {
    setEntry(state, action: PayloadAction<string>) {
      state.entry = action.payload;
      localStorage.setItem('entry_gql_point', action.payload);
    },
  },
});

export const { setEntry } = entry.actions;
export default entry.reducer;
export const useEntrySelector = () => useTypedSelector((state) => state.entry);

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTypedSelector } from '../store';

interface RequestBodyState {
  requestBody: string;
}

const initialState = {
  requestBody: localStorage.getItem('request_gql') || '{ }' || '',
} as RequestBodyState;

export const requestBody = createSlice({
  name: 'requestBody',
  initialState,
  reducers: {
    setRequestBody(state, action: PayloadAction<string>) {
      state.requestBody = action.payload;
      localStorage.setItem('request_gql', action.payload);
    },
  },
});

export const { setRequestBody } = requestBody.actions;
export default requestBody.reducer;
export const useRequestBodySelector = () =>
  useTypedSelector((state) => state.requestBody);

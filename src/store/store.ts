import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../features/counter/counterSlice';
import { pokemonApi } from '../service/pokemon';
import { studentsApi } from '../service/studentsApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(pokemonApi.middleware)
  ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

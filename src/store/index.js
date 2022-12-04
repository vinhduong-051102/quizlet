import { configureStore, getDefaultMiddleware, createSlice } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const rootReducer = createSlice({
  name: "root",
  reducers: {},
  initialState: {},
})

function* rootSaga() {

}

export const store = configureStore({
  reducer: rootReducer,
  middleware
})

sagaMiddleware.run(rootSaga)

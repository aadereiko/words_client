import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loggerMiddleware } from './middlewares';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore(preloadedState?: any) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [loggerMiddleware, sagaMiddleware, ...getDefaultMiddleware()],
        preloadedState,
    });

    sagaMiddleware.run(sagas);
    return store;
}
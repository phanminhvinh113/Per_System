import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './features/countSlice';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';
import persistReducerRoot from './reducers/persistReducer';
import { persistReducer, persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
// ...
// Define persist config
const persistConfig = {
    key: 'user',
    storage,
};
// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, persistReducerRoot);
// Create persister
const devToolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
//
const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: persistedReducer,
    },
    devTools: { trace: true, traceLimit: 25 },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }),
});
//
const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
//
export { store, persistor };

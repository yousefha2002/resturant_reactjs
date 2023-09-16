import { configureStore , combineReducers} from '@reduxjs/toolkit';
import userSlice from './userSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from 'redux-persist'
    import storage from 'redux-persist/lib/storage';

    const persistConfig = {
        key: 'root1',
        version: 1,
        storage,
    }

    const rootReducer=combineReducers({
        user : persistReducer(persistConfig, userSlice),
    })

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const  persistor = persistStore(store)
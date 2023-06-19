// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import userSlice from '../features/userSlice';
// Import other slice reducers as needed

const rootReducer = combineReducers({
    user: userSlice,
    // Add other slice reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

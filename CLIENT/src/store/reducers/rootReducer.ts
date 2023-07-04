// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import userSlice from '../features/userSlice';
import countSlice from '../features/countSlice';
// Import other slice reducers as needed

const rootReducer = combineReducers({
    count: countSlice,
    // Add other slice reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

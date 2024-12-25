import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from '../features/loading/loadingSlice';
import accountReducer from '../features/account/accountSlice';
import paymentMethodReducer from '../features/paymentMethod/paymentMethodSlice';
import profileReducer from '../features/profile/profileSlice'
import allProfileReducer from '../features/profile/allProfileSlice'
import userReducer from '../features/user/userSlice'
import postReducer from '../features/post/postSlice'
import postLikeReducer from '../features/post/postLikeSlice'
import transactionReducer from '../features/transaction/transactionSlice'
import userPostReducer from '../features/post/userPostSlice'
export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    account: accountReducer,
    paymentMethod: paymentMethodReducer,
    profile:profileReducer,
    allProfile: allProfileReducer,
    user:userReducer,
    post:postReducer,
    postLike:postLikeReducer,
    transaction:transactionReducer,
    userPost:userPostReducer
  },
});

export default store;

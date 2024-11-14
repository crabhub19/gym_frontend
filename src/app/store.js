import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from '../features/loading/loadingSlice';
import accountReducer from '../features/account/accountSlice';
import paymentMethodReducer from '../features/paymentMethod/paymentMethodSlice';
import profileReducer from '../features/profile/profileSlice'
export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    account: accountReducer,
    paymentMethod: paymentMethodReducer,
    profile:profileReducer,
  },
});

export default store;

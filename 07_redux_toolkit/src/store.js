import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

// 여러개의 슬라이스를 모아서 스토어를 만들 때 
const store = configureStore({
  reducer:{ //리듀서(단수형)
    counter:counterSlice.reducer
  }
});

export default store;
import {createSlice} from '@reduxjs/toolkit';

//슬라이스 정의
const counterSlice = createSlice({
  name:'counterSlice', // 슬라이스 이름
  initialState:{value:0}, // 초기값
  reducers:{// 리듀서(복수형)
    up:(state, action)=>{
      console.log(action);
      state.value = state.value + action.payload; // 자동으로 생성된 액션 크리에이트를 이용하면 payload 를 사용한다.
    }
  } 
});

export default counterSlice;
export const {up} = counterSlice.actions;
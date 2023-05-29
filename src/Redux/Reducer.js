import {USERDATA} from './Action';
const initialState = {
  data: [],
};
export const Rootreducer = (state = initialState, action) => {
  switch (action.type) {
    case USERDATA: {
      // console.log([action.payload]);
      return {data: [action.payload]};
    }
    default:
      return state;
  }
};

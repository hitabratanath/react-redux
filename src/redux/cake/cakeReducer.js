import { BUY_CAKE, MANUFACTURE_CAKE } from "./cakeTypes";

const initialState = {
  noOfCakes: 20
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1
      };
    case MANUFACTURE_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes + 1
      };
    default:
      return state;
  }
};
export default cakeReducer;

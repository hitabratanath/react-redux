import { BUY_ICECREAM, MANUFACTURE_ICECREAM } from "./iceCreamTypes";

export const buyIceCreamAction = () => {
  return {
    type: BUY_ICECREAM
  };
};
export const manufactureIceCreamAction = () => {
  return {
    type: MANUFACTURE_ICECREAM
  };
};

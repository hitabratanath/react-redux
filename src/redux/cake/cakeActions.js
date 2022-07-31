import { BUY_CAKE, MANUFACTURE_CAKE } from "./cakeTypes";

export const buyCakeAction = () => {
  return {
    type: BUY_CAKE
  };
};
export const manufactureCakeAction = () => {
  return {
    type: MANUFACTURE_CAKE
  };
};

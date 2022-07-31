import { useDispatch, useSelector } from "react-redux";
import {
  buyCakeAction,
  manufactureCakeAction
} from "../redux/cake/cakeActions";

const CakeContainer = () => {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of cakes: {noOfCakes}</h2>
      <button onClick={() => dispatch(buyCakeAction())}>Buy Cake</button>
      <button onClick={() => dispatch(manufactureCakeAction())}>
        Produce Cake
      </button>
    </div>
  );
};
export default CakeContainer;

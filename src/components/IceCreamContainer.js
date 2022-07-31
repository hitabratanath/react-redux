import { useDispatch, useSelector } from "react-redux";
import {
  buyIceCreamAction,
  manufactureIceCreamAction
} from "../redux/iceCream/iceCreamActions";

const IceCreamContainer = () => {
  const noOfIceCreams = useSelector((state) => state.iceCream.noOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of Ice Cream: {noOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCreamAction())}>
        Buy IceCream
      </button>
      <button onClick={() => dispatch(manufactureIceCreamAction())}>
        Produce IceCream
      </button>
    </div>
  );
};
export default IceCreamContainer;

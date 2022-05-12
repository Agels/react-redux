import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment, validateDecrement } from "./App/Features/Counter/actions";

const style = { backgroundColor: "#6A67CE", color: "white" ,border:'0 solid #6A67CE',width:30,height:30};
const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div style={{ marginLeft: "41rem", marginTop: "15rem" }}>
      <button style={style} onClick={() => dispatch(validateDecrement(1))}>
        {" "}
        -{" "}
      </button>{" "}
      {"  "}
      <span style={{paddingLeft:12, paddingRight:15}}>{count}</span>
      {"  "}
      <button style={style} onClick={() => dispatch(increment(1))}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;

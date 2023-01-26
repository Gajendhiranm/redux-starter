import React from "react";
import { buyCake } from "../redux";
import {useDispatch,useSelector } from "react-redux";

const Cakecontainer = (_props) => {
  const no_of_cakes = useSelector(state => state.no_of_cakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of cakes -- {no_of_cakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Now</button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     no_of_cakes: state.no_of_cakes,
//   };
// };

// const dispatchStateToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };


export default Cakecontainer
// export default connect(mapStateToProps, dispatchStateToProps)(Cakecontainer);

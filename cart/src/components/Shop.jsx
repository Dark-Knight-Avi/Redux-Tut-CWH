import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../states";

const Shop = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = 50;
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1>Deposite/Withdraw</h1>
        <p>Amount: {amount}₹</p>
        <div className="d-flex justify-content-center align-items-center">
          {/* <button
            className="btn btn-primary"
            onClick={() => dispatch(actionCreators.withdrawMoney(50))}
          >
            Withdraw
          </button>
          <p className="mx-2">Update Balance</p>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(actionCreators.depositMoney(50))}
          >
            Deposite
          </button> */}
          <button
            className="btn btn-primary"
            onClick={() => withdrawMoney(amount)}
          >
            Withdraw
          </button>
          <p className="mx-2">Update Balance</p>
          <button
            className="btn btn-primary"
            onClick={() => depositMoney(amount)}
          >
            Deposite
          </button>
        </div>
        <p className="bold"></p>
      </div>
    </div>
  );
};

export default Shop;

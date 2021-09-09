import React, { Component } from "react";
import "../assets/Calculator.css";

// import Redux Features
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import calulator actions
import * as actions from "../actions";

// import calculator components
import NumberBtn from "../components/NumberBtn";
import OperatorBtn from "../components/OperatorBtn";

class Calculator extends Component {
  render() {
    // init props
    const { calculator, actions } = this.props;

    return (
      <body>
        <div className="container">
          <h1>Redux Calculator</h1>
          <div className="container__item screen">
            <p className="screen-right">➡️ {calculator.currentResult}</p>
            <p className="screen-left">{calculator.total}</p>
          </div>

          <div className="container__item">
            <OperatorBtn
              click={() => actions.clear()}
              operator={"C"}
              className={"extra"}
            />
            <OperatorBtn
              click={() => actions.element("(")}
              operator={"("}
              className={"extra"}
            />
            <OperatorBtn
              click={() => actions.element(")")}
              operator={")"}
              className={"extra"}
            />
            <OperatorBtn
              click={() => actions.element("/")}
              operator={"/"}
              className={"operator"}
            />
          </div>

          <div className="container__item">
            <NumberBtn number={7} click={() => actions.element(7)} />
            <NumberBtn number={8} click={() => actions.element(8)} />
            <NumberBtn number={9} click={() => actions.element(9)} />
            <OperatorBtn
              click={() => actions.element("*")}
              operator={"X"}
              className={"operator"}
            />
          </div>

          <div className="container__item">
            <NumberBtn number={4} click={() => actions.element(4)} />
            <NumberBtn number={5} click={() => actions.element(5)} />
            <NumberBtn number={6} click={() => actions.element(6)} />
            <OperatorBtn
              click={() => actions.element("-")}
              operator={"-"}
              className={"operator"}
            />
          </div>

          <div className="container__item">
            <NumberBtn number={3} click={() => actions.element(3)} />
            <NumberBtn number={2} click={() => actions.element(2)} />
            <NumberBtn number={1} click={() => actions.element(1)} />
            <OperatorBtn
              click={() => actions.element("+")}
              operator={"+"}
              className={"operator"}
            />
          </div>

          <div className="container__item">
            <NumberBtn number={0} click={() => actions.element(0)} />
            <OperatorBtn
              click={() => actions.element(".")}
              operator={"."}
              className={"operator__down"}
            />
            <OperatorBtn
              click={() => actions.del()}
              operator={"⬅️"}
              className={"operator__down"}
            />
            <OperatorBtn
              click={() => actions.equal("=")}
              operator={"="}
              className={"operator__equal"}
            />
          </div>
        </div>
      </body>
    );
  }
}

const mapState = (state) => {
  return {
    calculator: state.calculator,
  };
};

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(Calculator);
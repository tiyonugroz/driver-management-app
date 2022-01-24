import React from "react";
import { Link } from "react-router-dom";
import Image from "../../images/rob.png";
import FourZeroFourStyleWrapper from "./style";

function FourZeroFour() {
  return (
    <FourZeroFourStyleWrapper className="page">
      <div className="content">
        <h1>404</h1>
        <h3>Looks like you got lost</h3>
        <p>The page youre looking for doesnt exist or has been moved.</p>
        <button type="button">
          <Link to="/">BACK HOME</Link>
        </button>
      </div>

      <div className="artwork">
        <img alt="#" src={Image} />
      </div>
    </FourZeroFourStyleWrapper>
  );
}

export default FourZeroFour;

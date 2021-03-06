import React from "react";
import img from "../images/tab-1-pic.png";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { generateMedia } from "styled-media-query";

function TabContentOne() {
  return (
    <TabContentContainer>
      <div className="container">
        <div className="tab-content">
          <div>
            <span className="title">
              To improve fast and become a better player you should know your
              weak and strong sides. Find them out with post-match analysis of
              every game you played.
            </span>
            <br />
            <Link to="/choose-plan">
              <Button className="tab-btn" style={{ marginTop: "4rem" }}>
                try it now
              </Button>
            </Link>
          </div>
          <React.Fragment>
            <img src={img} alt="" />
          </React.Fragment>
        </div>
      </div>
    </TabContentContainer>
  );
}

export default TabContentOne;

//Media
const customMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "960px"
});

// Main Content Container
const TabContentContainer = styled.div`
  background: var(--main-deep-dark);
  .container {
    margin: 0 5%;
  }
  .title {
    margin-top: 2rem;
    ${customMedia.lessThan("smDesktop")`
    font-size: 1.5rem;
    line-height: 1;
  `}
  }
  img {
    width: 100%;
  }
  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    align-items: left;
    font-size: 2rem;
    padding: 2.5rem;
    ${customMedia.lessThan("tablet")`
      grid-template-columns: 100%;
      text-align: center;
      padding-left: 0;
      padding-right: 0;
    `}
  }
`;

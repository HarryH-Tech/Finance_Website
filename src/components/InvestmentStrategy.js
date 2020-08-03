import React from "react";
import ReactTooltip from "react-tooltip";

import {
  StyledBackgroundImg,
  StyledGrid,
  StyledTooltip,
} from "../assets/styles/Constants";
import { StyledYearlyReturnsTable } from "../assets/styles/InvestmentStrategy";
import { StyledTextContainer } from "../assets/styles/Constants";
import CurrentPortfolioTable from "./CurrentPortfolioTable";

function InvestmentStrategy(props) {
  return (
    <StyledBackgroundImg
      style={{ backgroundColor: "#ededed" }}
      id="investment_strategy"
      height={"100%"}
    >
      <StyledGrid>
        <StyledTextContainer
          border={"2px solid #dfdfdf"}
          width={"80%"}
          borderRadius={"0.6rem"}
          margin={"4rem auto 4rem auto"}
          textAlign="justify"
          padding={"0.6rem"}
          backgroundColor={"#fff"}
          height={"80%"}
        >
          <div style={{ textAlign: "center" }}>
            <h1>Investment Strategy</h1>
          </div>
          <p>
            Most of the investments, are in technology companies as I believe
            they have the best long term growth potential. I also invest in
            companies in other industries if I think they have good growth
            potential and good management. Since I started investing on eToro
            about 4 years ago my portfolio has outperformed the{" "}
            <StyledTooltip
              data-multiline={true}
              data-tip="A stock market index that <br /> measures  the  performance of 500 <br />large companies listed on stock <br />exchanges in the United States."
            >
              S&P 500
            </StyledTooltip>{" "}
            every year.
          </p>
          <ReactTooltip />

          <StyledYearlyReturnsTable>
            <thead>
              <tr>
                <th>Year</th>
                <th>Portfolio Return</th>
                <th>S&P 500 Return</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2020 (As of July 1st)</td>
                <td>46.47%</td>
                <td>- 4.04%</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>43.47%</td>
                <td>31.48%</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>1.69%</td>
                <td>- 6.24%</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>96.73%</td>
                <td>19.42%</td>
              </tr>
            </tbody>
          </StyledYearlyReturnsTable>

          <p>
            I only invest in stocks and{" "}
            <StyledTooltip data-tip="Exchange Traded Funds">ETFs</StyledTooltip>{" "}
            on eToro and never short anything. Long term stock prices tend to go
            up and by shorting an asset you can only gain 100% if the value
            drops to zero but you can lose an unlimited amount of money if the
            share price continues to rise.
            <br />
            <br />I invest in well run businesses and use fundamentals to value
            a company. These fundamentals include looking at financial ratios as
            well as the company revenue, customer growth rates and assets/
            liabilities as well as various other factors. I invest for periods
            of at least 3 years as investing over a longer period avoids being
            subject to unpredictable short term fluctuations in the market.
          </p>
        </StyledTextContainer>

        <CurrentPortfolioTable />
      </StyledGrid>
    </StyledBackgroundImg>
  );
}

export default InvestmentStrategy;

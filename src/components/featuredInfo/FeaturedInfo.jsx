import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,415</span>
          <span className="featured-money-rate">
            -11.4 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$5,875</span>
          <span className="featured-money-rate">
            -8.1 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$3,625</span>
          <span className="featured-money-rate">
            +5.2 <ArrowUpward className="featured-icon positive" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
    </div>
  );
}

export default Featuredinfo;

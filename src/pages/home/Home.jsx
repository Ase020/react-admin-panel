import React from "react";
import Charts from "../../components/charts/Charts";
import Featuredinfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Charts
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active user"
      />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;

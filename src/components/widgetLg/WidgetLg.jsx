import React from "react";
import "./widgetlg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLg-btn " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLg-title">Latest transactions</h3>
      <table className="widgetLg-table">
        <tr className="widgetLg-tr">
          <th className="widgetLg-th">Customer</th>
          <th className="widgetLg-th">Date</th>
          <th className="widgetLg-th">Amounts</th>
          <th className="widgetLg-th">Status</th>
        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src={require("../../pics/customer1.jpg")}
              alt=""
              className="widgetLg-img"
            />
            <span className="widgetLg-name">John Obilo</span>
          </td>
          <td className="widgetLg-date">26th April 2022</td>
          <td className="widgetLg-amount">$126.98</td>
          <td className="widgetLg-status">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src={require("../../pics/customer2.jpg")}
              alt=""
              className="widgetLg-img"
            />
            <span className="widgetLg-name">Arthur Shelby</span>
          </td>
          <td className="widgetLg-date">1st May 2022</td>
          <td className="widgetLg-amount">$1,365.00</td>
          <td className="widgetLg-status">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src={require("../../pics/customer3.jpg")}
              alt=""
              className="widgetLg-img"
            />
            <span className="widgetLg-name">Hymie Bahati</span>
          </td>
          <td className="widgetLg-date">13th May 2022</td>
          <td className="widgetLg-amount">$254.25</td>
          <td className="widgetLg-status">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src={require("../../pics/customer4.jpg")}
              alt=""
              className="widgetLg-img"
            />
            <span className="widgetLg-name">Kayo Loch</span>
          </td>
          <td className="widgetLg-date">2nd Jan 2022</td>
          <td className="widgetLg-amount">$25.00</td>
          <td className="widgetLg-status">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src={require("../../pics/customer5.jpeg")}
              alt=""
              className="widgetLg-img"
            />
            <span className="widgetLg-name">Maxwell Ajweezy</span>
          </td>
          <td className="widgetLg-date">8th Feb 2022</td>
          <td className="widgetLg-amount">$478.75.00</td>
          <td className="widgetLg-status">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;

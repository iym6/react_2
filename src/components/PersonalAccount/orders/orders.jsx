import "./orders.css";
import { useState } from "react";
import PurchasedGames from "../purchasedGames/purchasedGame";

export default function Orders({ typeActiveContent, setTypeActiveContent }) {
  const content = () => {
    switch (typeActiveContent) {
      case "actual": {
        return;
      }
      case "purchased": {
        return <PurchasedGames />;
      }
      default: {
      }
    }
  };
  return (
    <div className="orders-container">
      <h2>Заказы</h2>
      <div className="orders-nav">
        <button
          className={`element-nav ${
            typeActiveContent === "actual" ? "active" : ""
          }`}
          onClick={() => setTypeActiveContent("actual")}
        >
          Актуальные
        </button>
        <button
          className={`element-nav ${
            typeActiveContent === "purchased" ? "active" : ""
          }`}
          onClick={() => setTypeActiveContent("purchased")}
        >
          Купленные товары
        </button>
      </div>
      <div className="content">{content()}</div>
    </div>
  );
}

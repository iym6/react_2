import "./orders.css";
import PurchasedGames from "../purchasedGames/purchasedGame";

export default function Orders() {
  return (
    <div className="orders-container">
      <div className="orders-nav">
        <div className="element-nav">Купленные товары</div>
      </div>
      <div className="content">
        <PurchasedGames />
      </div>
    </div>
  );
}

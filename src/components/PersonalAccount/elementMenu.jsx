import "./personalAccount/personalData.css";

export default function elementMenu({ children, onClick }) {
  return (
    <button className="element-menu" onClick={onClick}>
      {children}
    </button>
  );
}

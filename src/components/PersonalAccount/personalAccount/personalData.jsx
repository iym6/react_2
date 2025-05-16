import "./personalData.css";
import { useRef, useState } from "react";
import ElementMenu from "../elementMenu";
import ChangeData from "../changePersonalData/changePersonalData";
import Orders from "../orders/orders";

export default function UserDashboard() {
  const [userData, setUserData] = useState({
    avatar: "/images/sales.jpg",
    name: "Name",
    email: "user@example.com",
  });
  const fileInputRef = useRef(null);
  const [typeActiveContent, setTypeActiveContent] = useState("changeData");

  function handleAvatarClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  const contentPage = () => {
    switch (typeActiveContent) {
      case "changeData": {
        return <ChangeData userData={userData} setUserData={setUserData} />;
      }
      case "actual": {
        return (
          <Orders
            typeActiveContent={typeActiveContent}
            setTypeActiveContent={setTypeActiveContent}
          />
        );
      }
      case "purchased": {
        return (
          <Orders
            typeActiveContent={typeActiveContent}
            setTypeActiveContent={setTypeActiveContent}
          />
        );
      }
      default: {
      }
    }
  };

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      //что делать после чтения файла
      reader.onloadend = () => {
        setUserData((userData) => ({ ...userData, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard-content-container">
        <div className="dashboard-content">
          <img
            src={userData.avatar}
            alt="avatar"
            onClick={handleAvatarClick}
            className="avatar"
            title="Нажмите, чтобы изменить"
          />
          <input
            id="avatar"
            accept="image/*"
            type="file"
            ref={fileInputRef}
            onChange={(e) => handleAvatarChange(e)}
            style={{ display: "none" }}
          />
          <div className="username">{userData.name}</div>
          {/* <div className="email">{userData.email}</div> */}
          <button
            onClick={() => setTypeActiveContent("changeData")}
            className="btn-edit"
          >
            Изменить профиль
          </button>
          <h4 className="header-menu">Личная информация</h4>
          <ElementMenu>Главная</ElementMenu>
          <ElementMenu>Баланс</ElementMenu>
          <h4 className="header-menu">Заказы</h4>
          <ElementMenu onClick={() => setTypeActiveContent("actual")}>
            Мои заказы
          </ElementMenu>
          <ElementMenu>Мои возвраты</ElementMenu>
          <ElementMenu onClick={() => setTypeActiveContent("purchased")}>
            Купленные товары
          </ElementMenu>
        </div>
      </div>
      <div className="main-content-container">{contentPage()}</div>
    </div>
  );
}

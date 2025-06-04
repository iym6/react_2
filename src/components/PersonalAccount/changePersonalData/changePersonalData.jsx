import "./changePersonalData.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Для навигации
import { useAuth } from "../../Login/AuthContext";

export default function FormChangePersonalData({ userData, setUserData }) {
  const [form, setForm] = useState({ ...userData });
  const { logout } = useAuth();
  const navigate = useNavigate();

  function saveChangesInEditor(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserData(form);
  }

  const handleOutSubmit = (e) => {
    e.preventDefault();
    alert("Вы вышли из аккаунта");
    logout();
    navigate("/");
  };

  return (
    <div className="page-edit">
      <h2>Персональные данные</h2>
      <form onSubmit={handleSubmit} className="form-edit">
        <div className="form-group">
          <label htmlFor="name">
            Имя пользователя:
            <input
              id="name"
              type="text"
              value={form.name}
              maxLength={56}
              minLength={3}
              onChange={(e) => saveChangesInEditor(e)}
              className="input"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => saveChangesInEditor(e)}
              className="input"
              required
            />
          </label>
        </div>
        <div className="btn-container">
          <button type="submit" className="btn save">
            Сохранить
          </button>
          <button className="btn out" onClick={(e) => handleOutSubmit(e)}>
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </div>
  );
}

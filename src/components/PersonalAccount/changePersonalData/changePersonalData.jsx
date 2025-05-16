import "./changePersonalData.css";
import { useState } from "react";

export default function FormChangePersonalData({ userData, setUserData }) {
  const [form, setForm] = useState({ ...userData });
  function saveChangesInEditor(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setUserData(form);
  }

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
        <button type="submit" className="btn save">
          Сохранить
        </button>
      </form>
    </div>
  );
}

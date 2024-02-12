import React from "react";
import "./styles/cardUser.css";

const CardUser = ({ user, deleteUser, setEditUser, setIsOpen }) => {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro que deseas eliminar este usuario?"
    );
    if (confirmDelete) {
      deleteUser("/users/", user.id);
    }
  };

  const handleEdit = () => {
    setEditUser(user);
    setIsOpen(true);
  };

  return (
    <article className="card__container">
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <ul>
        <li>
          <span>CORREO </span>
          <span>{user.email}</span> <br />
        </li>
        <li>
          <span>CUMPLEAÑOS </span>
          <span>
            <box-icon name="gift" className="birthday-gift-icon"></box-icon>
            {user.birthday}
          </span>
        </li>
      </ul>
      <button className="card__btn" onClick={handleDelete}>
        <box-icon name="trash"></box-icon>
      </button>
      <button className="card_btn_1" onClick={handleEdit}>
        <box-icon name="edit-alt"></box-icon>
      </button>
    </article>
  );
};

export default CardUser;

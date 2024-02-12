import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/formUser.css";

function FormUser({
  createUser,
  editUser,
  upDateUser,
  setEditUser,
  isOpen,
  setIsOpen,
}) {
  const { handleSubmit, register, setValue } = useForm();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editUser) {
      setIsEditing(true);

      Object.keys(editUser).forEach((key) => {
        setValue(key, editUser[key]);
      });
    } else {
      setIsEditing(false);

      setValue("email", "");
      setValue("password", "");
      setValue("first_name", "");
      setValue("last_name", "");
      setValue("birthday", "");
    }
  }, [editUser, setValue]);

  useEffect(() => {
    if (!isOpen) {
      setValue("email", "");
      setValue("password", "");
      setValue("first_name", "");
      setValue("last_name", "");
      setValue("birthday", "");
      setEditUser(null);
    }
  }, [isOpen, setValue, setEditUser]);

  const submit = (data) => {
    if (isEditing) {
      upDateUser("/users", editUser.id, data);
      setEditUser(null);
    } else {
      createUser("/users", data);
    }

    setValue("email", "");
    setValue("password", "");
    setValue("first_name", "");
    setValue("last_name", "");
    setValue("birthday", "");
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`form__background ${isOpen && "able"} `}>
      <form className="form__conteiner" onSubmit={handleSubmit(submit)}>
        <div className="form__close" onClick={handleClose}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <h2 className="form__title">
          {isEditing ? "Editar Información" : "Nuevo Usuario"}
        </h2>
        <div className="form__item">
          <label htmlFor="email">
            Email <br />{" "}
          </label>
          <input {...register("email")} id="email" type="text" />
        </div>
        <div className="form__item">
          <label htmlFor="password">
            Password <br />{" "}
          </label>
          <input {...register("password")} id="password" type="password" />
        </div>
        <div className="form__item">
          <label htmlFor="first_name">
            First Name <br />{" "}
          </label>
          <input {...register("first_name")} id="first_name" type="text" />
        </div>
        <div className="form__item">
          <label htmlFor="last_name">
            Last Name <br />{" "}
          </label>
          <input {...register("last_name")} id="last_name" type="text" />
        </div>
        <div className="form__item">
          <label htmlFor="birthday">Birthday </label>
          <input {...register("birthday")} id="birthday" type="date" />
        </div>
        <br />
        <br />
        <br />
        <div className="form__submit">
          <button className="form__btn">
            {isEditing ? "Guardar Cambios" : "Agregar nuevo usuario"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormUser;

import { useEffect, useState } from "react";
import "./App.css";
import useCrud from "./hooks/useCrud";
import FormUser from "./components/FormUser";
import CardUser from "./components/CardUser";

function App() {
  const [editUser, setEditUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const url = "https://users-crud.academlo.tech/";
  const [users, getUsers, createUser, deleteUser, upDateUser] = useCrud(url);

  useEffect(() => {
    getUsers("/users");
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="app__header">
        <h1 className="app__title">Usuarios.</h1>
        <button className="app__btn" onClick={handleOpen}>
          + crear nuevo usuario
        </button>
      </div>
      <FormUser
        createUser={createUser}
        editUser={editUser}
        upDateUser={upDateUser}
        setEditUser={setEditUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div>
        {users?.map((user) => (
          <CardUser
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setEditUser={setEditUser}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

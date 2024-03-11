import { useEffect, useState } from "react";
import "./App.css";
import CreateUser from "./components/CreateUser/CreateUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [id, setID] = useState("");
  const navigate = useNavigate();

  const getFirstName = (event) => {
    setFirstName(event.target.value);
    console.log(firstname);
  };

  const getLastName = (event) => {
    setLastName(event.target.value);
    console.log(lastname);
  };

  const createUser = async (event) => {
    event.preventDefault();
    try {
      if (firstname === "" && lastname === "") {
        alert("Invalid input");
        return;
      }
      const createUser = await axios.post(
        "http://hyeumine.com/newuser.php",
        {
          firstname: firstname,
          lastname: lastname,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setID(await createUser.data.id);
      console.log(await createUser.data.id);
      console.log(await createUser.data);
    } catch (error) {}
  };

  useEffect(() => {
    if (id !== "" && lastname !== "" && firstname !== "")
      navigate("/add-notes", {
        state: { id: id, firstname: firstname, lastname: lastname },
      });
  }, [id]);

  return (
    <div className="App">
      <CreateUser
        className="create-user"
        firstname={firstname}
        lastname={lastname}
        getFirstName={getFirstName}
        getLastName={getLastName}
        createUser={createUser}
      />
    </div>
  );
}

export default App;

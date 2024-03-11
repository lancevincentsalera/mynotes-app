import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Notes.css";

const Notes = () => {
  const location = useLocation();
  const notes = location.state ? location.state.notesList : [];
  const { firstname, lastname, id } = location.state || {};
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <ul>
          <li>
            <button
              onClick={() =>
                navigate("/add-notes", {
                  state: { id: id, firstname: firstname, lastname: lastname },
                })
              }
            >
              Add Notes
            </button>
          </li>
        </ul>
      </nav>
      <div className="notes-container">
        <div className="user-details">
          <p>
            Name: {firstname} {lastname}
          </p>
          <p>ID: {id}</p>
        </div>
        {notes.map((note, index) => {
          return (
            <div key={index} className="note">
              <p className="note-content">{note[0]}</p>
              <p className="note-content">{note[1]}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Notes;

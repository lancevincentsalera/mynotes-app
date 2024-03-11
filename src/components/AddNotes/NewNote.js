import React, { useState } from "react";
import "./NewNote.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const NewNote = () => {
  const [noteText, setNoteText] = useState("");
  const location = useLocation();
  const id = location.state.id;
  const firstname = location.state.firstname;
  const lastname = location.state.lastname;

  const charLimit = 200;

  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = async () => {
    try {
      const noteResponse = await axios.post(
        "http://hyeumine.com/newnote.php",
        {
          id: Number(id),
          note: noteText,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(noteResponse.data);
      if (noteText.trim().length > 0) {
        //   handleAddNote(noteText);
        setNoteText("");
      }
    } catch (error) {}
  };

  return (
    <div className="note-container">
      <h1>
        WELCOME {firstname} {lastname}!
      </h1>
      <div className="note new">
        <textarea
          rows="8"
          cols="10"
          placeholder="Type to add a note..."
          value={noteText}
          onChange={handleChange}
        ></textarea>
        <div className="note-footer">
          <small>{charLimit - noteText.length} Remaining</small>
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNote;

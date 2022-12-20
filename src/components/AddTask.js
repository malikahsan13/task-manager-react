import React, {useState} from "react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) =>{
        e.preventDefault();
        onAdd({text, dateTime, reminder})
        setText("");
        setDateTime("");
        setReminder(false);
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>Task</label>
          <input type="text" onChange={(e)=>{setText(e.target.value)}} />
        </div>
        <div>
          <label>Date & Time</label>
          <input type="text" onChange={(e)=>{setDateTime(e.target.value)}} />
        </div>
        <div>
          <label>Reminder</label>
          <input type="checkbox" checked={reminder ? "checked" : ""} onChange={(e)=>{setReminder(e.target.checked)}} />
        </div>
        <input type="submit" value="Save Task" />
      </form>
    </>
  );
};
export default AddTask;

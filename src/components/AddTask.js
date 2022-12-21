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
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Task</label>
          <input type="text" onChange={(e)=>{setText(e.target.value)}} />
        </div>
        <div className='form-control'>
          <label>Date & Time</label>
          <input type="text" onChange={(e)=>{setDateTime(e.target.value)}} />
        </div>
        <div className='form-control form-control-check'>
          <label>Set Reminder</label>
          <input type="checkbox" checked={reminder ? "checked" : ""} onChange={(e)=>{setReminder(e.target.checked)}} />
        </div>
        <input type="submit" value="Save Task" className='btn btn-block' />
      </form>
    </>
  );
};
export default AddTask;

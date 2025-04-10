import { Box, Button, Stack, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import SaveClear from "../components/SaveClear";

function EditTask({ setEditing, currentTask, getTasks }) {
  const [taskNew, setTaskNew] = useState(currentTask);

  const handleChange = (e) => {
    setTaskNew({ ...taskNew, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    let filteredTasks = tasks.filter((task) => task.time != taskNew.time);
    let updatedTasks = [...filteredTasks, taskNew];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setEditing(false);
    getTasks();
  };
  return (
    <>
      <Box sx={{ px: 2, py: 2 }}>
        <Stack>
          <form onSubmit={handleSubmit} action="">
            <TextField fullWidth label="Task" placeholder="Type your task here..." name="task" value={taskNew.task} onChange={handleChange} />
            <TextField
              sx={{ my: 1 }}
              fullWidth
              size="small"
              label="Memo"
              placeholder="Type your memo here..."
              name="memo"
              value={taskNew.memo}
              onChange={handleChange}
            />
            <Stack flexDirection="row" sx={{ columnGap: 1, mb: 1 }}>
              <SaveClear setEditing={setEditing} handleSubmit={handleSubmit} />
            </Stack>
          </form>
        </Stack>
      </Box>
    </>
  );
}

export default EditTask;

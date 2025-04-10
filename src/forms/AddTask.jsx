import { Box, Button, Stack, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Swal from "sweetalert2";

function AddTask({ setAddTask, hour, getTasks }) {
  const [currentTasks, setCurrentTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [taskNew, setTaskNew] = useState({ time: `${hour.toString().padStart(2, "0")}:00`, task: "", memo: "", done: false });

  const handleChange = (e) => {
    setTaskNew((taskNew) => ({ ...taskNew, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskNew.task || taskNew.task.trim() == "") {
      setAddTask(false);
      return Swal.fire({ title: "Please fill in a task!", text: "FYI: The memo is optional.", icon: "info" });
    }

    await setCurrentTasks((tasks) => [...tasks, taskNew]);
    setAddTask(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(currentTasks));
    getTasks();
  }, [currentTasks]);

  return (
    <>
      <Box sx={{ px: 2, py: 2 }}>
        <Stack>
          <form onSubmit={handleSubmit} action="">
            <TextField size="small" fullWidth label="Task" placeholder="Type your task here..." name="task" onChange={handleChange} />
            <TextField sx={{ my: 1 }} fullWidth size="small" label="Memo" placeholder="Type your memo here..." name="memo" onChange={handleChange} />
            <Stack flexDirection="row" sx={{ columnGap: 1, mb: 1 }}>
              <Button type="submit" variant="contained" color="success">
                <CheckIcon size="small" />
              </Button>
              <Button type="button" onClick={() => setAddTask(false)} variant="contained" color="inherit">
                <ClearIcon size="small" />
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </>
  );
}

export default AddTask;

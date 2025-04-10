import { useState, useEffect } from "react";
import { Box, Button, Paper, Stack, TextField, Typography, Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import AddTask from "../forms/AddTask";
import AddIcon from "@mui/icons-material/Add";
import EditDelete from "./EditDelete";
import EditTask from "../forms/EditTask";

function TimeRow({ timelineHours, hour, tasks, getTasks }) {
  const [editing, setEditing] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [currentHour, setCurrentHour] = useState(`${hour.toString().padStart(2, "0")}:00`);

  let myTask = () => {
    const task = tasks.find((task) => task.time == currentHour);
    setCurrentTask(task);
  };
  useEffect(() => {
    myTask();
  }, [tasks, currentHour]);

  return (
    <>
      <Container>
        <Box sx={{ py: 1 }}>
          <Divider sx={{ pb: 4 }} textAlign="left">
            {timelineHours(hour)}
          </Divider>
          <Stack sx={{ minHeight: "150px" }}>
            <Paper elevation={1} sx={{ px: { xs: 1, sm: 2, md: 3, lg: 5 }, mx: { xs: 0, sm: 10, md: 15, lg: 30 }, borderRadius: 5 }}>
              {editing ? (
                <EditTask setEditing={setEditing} currentTask={currentTask} getTasks={getTasks} />
              ) : currentTask ? (
                <>
                  <Box display="flex" flexDirection="row">
                    <EditDelete currentTask={currentTask} tasks={tasks} getTasks={getTasks} setEditing={setEditing} />
                    <Divider orientation="vertical" flexItem sx={{ mx: { xs: 1, sm: 2, md: 3, lg: 5 } }} />
                    <Stack sx={{ my: { xs: 1, sm: 2 } }} justifyContent="center">
                      <Typography sx={{ fontSize: { xs: 18, sm: 24, md: 28 } }} variant="h5">
                        {currentTask.task}
                      </Typography>
                      <br />
                      {currentTask.memo == "" || currentTask.memo == null ? null : (
                        <>
                          <small>Notes : </small>
                          <Typography variant="subtitle2">{currentTask.memo}</Typography>
                        </>
                      )}
                    </Stack>
                  </Box>
                </>
              ) : addTask ? (
                <AddTask setAddTask={setAddTask} getTasks={getTasks} hour={hour} />
              ) : (
                <Stack>
                  <Button onClick={() => setAddTask(true)}>
                    <AddIcon fontSize="large" />
                  </Button>
                </Stack>
              )}
            </Paper>
          </Stack>
          {hour == 23 ? <Divider /> : null}
        </Box>
      </Container>
    </>
  );
}

export default TimeRow;

import { Button, Divider, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

function EditDelete({ currentTask, getTasks, setEditing }) {
  const deleteHandler = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "This cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No, stop!",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        const filteredTasks = tasks.filter((task) => task.time !== currentTask.time);
        console.log(filteredTasks);
        localStorage.setItem("tasks", JSON.stringify(filteredTasks));
        getTasks();
        Swal.fire({
          title: "Deleted!",
          text: "Successfully deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <Stack sx={{ my: 5, rowGap: 0.2 }}>
        <Button sx={{ minWidth: 0, width: "40px" }} color="warning" variant="contained" onClick={() => setEditing(true)}>
          <EditIcon fontSize="small" />
        </Button>
        <Button sx={{ minWidth: 0, width: "40px" }} color="error" variant="contained" onClick={deleteHandler}>
          <DeleteIcon fontSize="small" />
        </Button>
      </Stack>
    </>
  );
}

export default EditDelete;

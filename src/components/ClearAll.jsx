import { Button } from "@mui/material";
import Swal from "sweetalert2";

function ClearAll({ getTasks }) {
  const clickHandler = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "This cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No, stop!",
      confirmButtonText: "Yes, blow it up!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("tasks", JSON.stringify([]));
        getTasks();
        Swal.fire({
          title: "Nuked!",
          text: "Everything is gone!",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <Button sx={{ borderColor: "lightgray", color: "red" }} variant="outlined" disableRipple type="button" onClick={clickHandler}>
        Clear
      </Button>
    </>
  );
}

export default ClearAll;

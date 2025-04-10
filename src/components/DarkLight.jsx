import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Swal from "sweetalert2";
function DarkLight({ darkMode, setDarkMode }) {
  const modeHandler = () => {
    if (!darkMode) {
      Swal.fire({
        title: "Do you prefer 'Dark Mode'?",
        text: "This will make your preference persist",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "No!",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("darkMode", true);
          setDarkMode(true);
          Swal.fire({
            title: "Enjoy yourself!",
            text: "Welcome to the Dark Side!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Do you still want to change to Dark Mode?",
            text: "This will change your current visit to Dark Mode",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "No!",
            confirmButtonText: "Yes!",
          }).then((result) => {
            if (result.isConfirmed) {
              setDarkMode(true);
              Swal.fire({ title: "Enjoy!", text: "First steps into the Dark Side!", icon: "success" });
            }
          });
        }
      });
    } else {
      Swal.fire({
        title: "Do you prefer 'Light Mode'?",
        text: "This will make your preference persist",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "No!",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("darkMode") || null;
          setDarkMode(false);
          Swal.fire({
            title: "Enjoy yourself!",
            text: "Welcome to the Light Side!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Do you still want to change to Light Mode?",
            text: "This will change your current visit to Light Mode",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "No!",
            confirmButtonText: "Yes!",
          }).then((result) => {
            if (result.isConfirmed) {
              setDarkMode(false);
              Swal.fire({ title: "Enjoy!", text: "First steps into the Light!", icon: "success" });
            }
          });
        }
      });
    }
  };
  return (
    <>
      <IconButton onClick={modeHandler} color="inherit">
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </>
  );
}

export default DarkLight;

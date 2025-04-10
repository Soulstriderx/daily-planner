import { Button, Divider, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Swal from "sweetalert2";

function SaveClear({ setEditing, handleSubmit }) {
  return (
    <>
      <Stack flexDirection="row" sx={{ my: 0.5, columnGap: 1 }}>
        <Button sx={{ minWidth: 0, width: "40px" }} color="warning" variant="contained" onClick={handleSubmit}>
          <CheckIcon size="small" />
        </Button>
        <Button type="button" sx={{ minWidth: 0, width: "40px" }} color="error" variant="contained" onClick={() => setEditing(false)}>
          <ClearIcon size="small" />
        </Button>
      </Stack>
    </>
  );
}

export default SaveClear;

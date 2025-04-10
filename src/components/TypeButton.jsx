import { ToggleButton } from "@mui/material";
function TypeButton({ use24, setUse24 }) {
  return (
    <>
      <ToggleButton disableRipple selected={use24} onChange={() => setUse24((use24) => !use24)}>
        {use24 ? "Use 12-hour system" : "Use 24-hour system"}
      </ToggleButton>
    </>
  );
}

export default TypeButton;

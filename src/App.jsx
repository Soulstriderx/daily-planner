import { useState, useEffect, useMemo } from "react";
import TimeRow from "./components/TimeRow";
import TypeButton from "./components/TypeButton";
import { Box } from "@mui/material";
import ClearAll from "./components/ClearAll";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import DarkLight from "./components/DarkLight";

function App() {
  const [use24, setUse24] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const getTasks = () => {
    const taskList = localStorage.getItem("tasks");
    if (taskList) {
      setTasks(JSON.parse(taskList));
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  };

  useEffect(() => {
    getTasks();
    setDarkMode(localStorage.getItem("darkMode") === "true" || false);
  }, []);

  const timelineHours = (hour) => {
    if (use24) {
      const timePeriod = hour >= 12 ? "PM" : "AM";
      return `${hour.toString().padStart(2, "0")}:00 (${timePeriod})`;
    } else {
      const timePeriod = hour >= 12 ? "PM" : "AM";
      const time12 = hour % 12 === 0 ? 12 : hour % 12;
      return `${time12.toString().padStart(2, "0")}:00 ${timePeriod}`;
    }
  };
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex" flexDirection="row" justifyContent="center" sx={{ columnGap: 2, mt: 2 }}>
          <ClearAll getTasks={getTasks} />
          <TypeButton use24={use24} setUse24={setUse24} />
          <DarkLight darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>
        <Box sx={{ m: 5 }} flexDirection="row" justifyContent="center">
          {hours.map((hour, i) => (
            <TimeRow key={i} tasks={tasks} hour={hour} getTasks={getTasks} timelineHours={timelineHours} />
          ))}
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

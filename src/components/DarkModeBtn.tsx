import { useTheme } from "next-themes";
import { useState } from "react";

export default function DarkModeBtn() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  function handleModeBtn() {
    setIsDarkMode(!isDarkMode);
    isDarkMode ? setTheme("light") : setTheme("dark");
  }

  return (
    <div>
      <button onClick={handleModeBtn}>Mode Change</button>
    </div>
  );
}

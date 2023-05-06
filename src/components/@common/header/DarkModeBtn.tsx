import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

export default function DarkModeBtn() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  function handleModeBtn() {
    setIsDarkMode(!isDarkMode);
    isDarkMode ? setTheme("light") : setTheme("dark");
  }

  return (
    <div>
      <button onClick={handleModeBtn}>
        <Image
          src="/darkModeIcon.png"
          alt="Picture of the author"
          width={28} //automatically provided
          height={28} //automatically provided
        />
      </button>
    </div>
  );
}

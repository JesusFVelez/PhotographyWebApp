import React, { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [colorScheme, setColorScheme] = useState(null);

  useEffect(() => {
    const storedColorScheme = window.localStorage.getItem("color-scheme");
    if (storedColorScheme) {
      setColorScheme(storedColorScheme);
      document.body.classList.add(`${storedColorScheme}`);
    }
  }, []);

  function handleToggleColorScheme() {
    if (colorScheme === "dark") {
      setColorScheme("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      window.localStorage.setItem("color-scheme", "light");
    } else {
      setColorScheme("dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      window.localStorage.setItem("color-scheme", "dark");
    }
  }

  return (
    <div className="tt-style-switch index-dark">
      <i
        className={`bi ${
          colorScheme === "dark" ? "bi-moon" : "bi-brightness-low-fill"
        }`}
        onClick={handleToggleColorScheme}
      ></i>
    </div>
  );
};

export default ThemeToggler;

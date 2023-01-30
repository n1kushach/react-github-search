import "./App.css";
import { createContext, useState } from "react";
import { Main } from "./components/Main";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
      <div className="App" id={theme}>
      <Main/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

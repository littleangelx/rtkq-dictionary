import { useState } from "react";

import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [font, setFont] = useState("Sans Serif");

  const handleChangeFont = (value) => {
    setFont(value);
  };

  return (
    <div
      className="app"
      style={{
        fontFamily:
          font === "Sans Serif"
            ? "'Inter', sans-serif"
            : font === "Serif"
            ? "'Lora', serif"
            : "'Inconsolata', monospace",
      }}
    >
      <TopBar font={font} onChangeFont={handleChangeFont} />
      <SearchBar />
    </div>
  );
};

export default App;

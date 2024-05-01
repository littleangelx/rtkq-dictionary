import { useState } from "react";

import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import { useGetDefinitionQuery } from "./features/api/apiSlice";
import Definition from "./components/Definition";

const App = () => {
  const [font, setFont] = useState("Sans Serif");
  const [word, setWord] = useState("");

  const handleChangeFont = (value) => {
    setFont(value);
  };

  const handleSearch = (value) => {
    setWord(value);
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
      <SearchBar onSearch={handleSearch} />
      <Definition word={word} />
    </div>
  );
};

export default App;

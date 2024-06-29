// CharacterContext.js
"use client";

import { createContext, useContext, useState } from "react";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState({
    "hair-style": "Hair Style 1",
    "hair-color": "Black Hair",
    "skin-tone": "Light Skin",
    "eye-color": "Blue Eyes",
    outfit: "Casual Outfit",
  });

  const updateCharacter = (key, value) => {
    setCharacter((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <CharacterContext.Provider value={{ character, updateCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => useContext(CharacterContext);

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = [
  { name: "Hair Style", key: "hair-style" },
  { name: "Hair Color", key: "hair-color" },
  { name: "Skin Tone", key: "skin-tone" },
  { name: "Eye Color", key: "eye-color" },
  { name: "Outfit", key: "outfit" },
];

const options = {
  "hair-style": [
    { alt: "Hair Style 1" },
    { alt: "Hair Style 2" },
    { alt: "Hair Style 3" },
  ],
  "hair-color": [
    { alt: "Black Hair" },
    { alt: "Brown Hair" },
    { alt: "Blonde Hair" },
  ],
  "skin-tone": [
    { alt: "Light Skin" },
    { alt: "Medium Skin" },
    { alt: "Dark Skin" },
  ],
  "eye-color": [
    { alt: "Blue Eyes" },
    { alt: "Green Eyes" },
    { alt: "Brown Eyes" },
  ],
  outfit: [
    { alt: "Casual Outfit" },
    { alt: "Formal Outfit" },
    { alt: "Fantasy Outfit" },
  ],
};

export function Comp() {
  const [activeTab, setActiveTab] = useState("hair-style");
  const [characterStyle, setCharacterStyle] = useState({
    "hair-style": "",
    "hair-color": "",
    "skin-tone": "",
    "eye-color": "",
    outfit: "",
  });

  const handleSelect = (style) => {
    setCharacterStyle((prevStyle) => ({
      ...prevStyle,
      [activeTab]: style,
    }));
  };

  const handleSubmit = () => {
    console.log("Character Style:", characterStyle);
    alert(`Character Style: ${JSON.stringify(characterStyle, null, 2)}`);
  };

  return (
    <div className="flex flex-col h-screen bg-[#f0e6ff]">
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[300px] h-[400px] bg-[#ffffff] rounded-[20px] shadow-lg">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
            <img
              src="/placeholder.svg"
              alt="Character"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent rounded-b-3xl" />
        </div>
      </div>
      <div className="bg-[#ffffff] rounded-[40px] shadow-lg p-6 flex flex-col gap-6">
        <div className="flex items-center justify-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`text-sm font-medium ${activeTab === tab.key ? "text-primary" : "text-muted-foreground text-[#6b6b6b]"}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Character Customization</h2>
          <Button className="ml-auto bg-[#cacaca]" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {options[activeTab] && (
            <div className="flex flex-col gap-4">
              <label className="text-sm font-medium">
                {tabs.find((tab) => tab.key === activeTab).name}
              </label>
              <div className="grid grid-cols-5 gap-4">
                {options[activeTab].map((option, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => handleSelect(option.alt)}
                  >
                    <img
                      src="/placeholder.svg"
                      alt={option.alt}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      Select
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

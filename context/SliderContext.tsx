import React, { createContext, useContext, useState } from "react";
import { FC } from "react";

interface SliderContextType {
  value: number;
  activity?: string;
  [activity: string]: any;
  sleeping: number;
  eating: number;
  working: number;
  setValue: (value: number) => void;
  setSleeping: (value: number) => void;
  setEating: (value: number) => void;
  setWorking: (value: number) => void;
}

export const SliderContext = createContext<SliderContextType | undefined>(
  undefined
);

export const SliderProvider: FC<{ children: any }> = ({ children }) => {
  const [value, setValue] = useState(0);
  const [sleeping, setSleeping] = useState(0);
  const [eating, setEating] = useState(0);
  const [working, setWorking] = useState(0);

  return (
    <SliderContext.Provider
      value={{
        value,
        setValue,
        sleeping,
        eating,
        working,
        setSleeping,
        setEating,
        setWorking,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

// export const useSlider = () => {
//   const context = useContext(SliderContext);
//   if (context === undefined) {
//     throw new Error("useSlider must be used within a SliderProvider");
//   }
//   return context;
// };

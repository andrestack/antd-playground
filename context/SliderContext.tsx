import React, { createContext, useContext, useState } from "react";
import { FC } from "react";

interface SliderContextType {
  value: number;
  setValue: (value: number) => void;
}

export const SliderContext = createContext<SliderContextType | undefined>(
  undefined
);

export const SliderProvider: FC<{ children: any }> = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <SliderContext.Provider value={{ value, setValue }}>
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

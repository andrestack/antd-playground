import ProgressBar from "./ProgressBar";
import SliderComponent from "./SliderComponent";
import { useState } from "react";



const ActivityForm = () => {
    const [time, setTime] = useState<{
        sleeping: number;
        eating: number;
        working: number;
    }>({
        sleeping: 0,
        eating: 0,
        working:0
    });

    
    


  return (
    <>
      <SliderComponent activity="sleeping"/>
      <SliderComponent activity="eating"/>
      <SliderComponent activity="working"/>
      <ProgressBar hours={undefined} />
    </>
  );
};

export default ActivityForm;
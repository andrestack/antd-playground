import ProgressBar from "./ProgressBar";
import SliderComponent from "./SliderComponent";
import { useState } from "react";

const ActivityForm = () => {
  return (
    <>
      <SliderComponent activity="sleeping" />
      <SliderComponent activity="eating" />
      <SliderComponent activity="working" />
      <ProgressBar />
    </>
  );
};

export default ActivityForm;

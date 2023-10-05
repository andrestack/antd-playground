import ProgressBar from "./ProgressBar";
import SliderComponent from "./SliderComponent";
import { useState } from "react";
import { ProgressBarCopilot } from "./ProgressBarCopilot";

const ActivityForm = () => {
  return (
    <>
      <SliderComponent activity="sleeping" />
      <SliderComponent activity="eating" />
      <SliderComponent activity="working" />
      <ProgressBar hours={0} />
      <ProgressBarCopilot />
    </>
  );
};

export default ActivityForm;

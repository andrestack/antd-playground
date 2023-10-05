import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSlider } from "../hooks/useSlider";

export const ProgressBarCopilot: React.FC = () => {
  const { sleeping, eating, working } = useSlider();
  const totalHours = 24 - sleeping - eating - working;
  const sleepingPercentage = Math.round((sleeping / 24) * 100);
  const eatingPercentage = Math.round((eating / 24) * 100);
  const workingPercentage = Math.round((working / 24) * 100);
  const totalHoursPercentage = Math.round((totalHours / 24) * 100);

  const styles = buildStyles({
    pathColor: `linear-gradient(to right, #ff0000 ${sleepingPercentage}%, #00ff00 ${sleepingPercentage}% ${
      sleepingPercentage + eatingPercentage
    }%, #0000ff ${sleepingPercentage + eatingPercentage}% ${
      sleepingPercentage + eatingPercentage + workingPercentage
    }%, #ff0000 ${
      sleepingPercentage + eatingPercentage + workingPercentage
    }% ${totalHoursPercentage}%, #fff ${totalHoursPercentage}% )`,
    trailColor: "#d6d6d6",
    strokeLinecap: "butt",
  });

  return (
    <div className="flex justify-center items-center w-20">
      <CircularProgressbar
        value={totalHoursPercentage}
        text={`${totalHours}h`}
        styles={styles}
      />
    </div>
  );
};

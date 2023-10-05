import React from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
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
    // pathColor: `linear-gradient(to right, red ${sleepingPercentage}%, red ${sleepingPercentage}% ${
    //   sleepingPercentage + eatingPercentage
    // }%, orange ${sleepingPercentage + eatingPercentage}% ${
    //   sleepingPercentage + eatingPercentage + workingPercentage
    // }%, green ${
    //   sleepingPercentage + eatingPercentage + workingPercentage
    // }% ${totalHoursPercentage}%, #purple ${totalHoursPercentage}% )`,
    pathColor: `${
      sleepingPercentage
        ? "purple"
        : eatingPercentage
        ? "orange"
        : workingPercentage
        ? "green"
        : "none"
    }`,
    trailColor: "lightgrey",
    strokeLinecap: "butt",
  });

  return (
    // <div className="w-10 h-10">
    //   <CircularProgressbarWithChildren
    //     className="w-10 h-10"
    //     value={totalHoursPercentage}
    //     text={`${totalHours}h left`}
    //     styles={styles}
    //   />
    // </div>
    <CircularProgressbarWithChildren
        value={totalHoursPercentage}
        styles={buildStyles({
            pathColor: `${
                sleepingPercentage
                  ? "purple"
                  : eatingPercentage
                  ? "orange"
                  : workingPercentage
                  ? "green"
                  : "none"
              }`,
              trailColor: "lightgrey",
              strokeLinecap: "butt",
        })}
      >
        {/* Foreground path */}
        <CircularProgressbar
          value={totalHoursPercentage}
          styles={buildStyles({
            trailColor: "transparent",
            strokeLinecap: "butt"
          })}
          text={`${totalHours}`}
        />
      </CircularProgressbarWithChildren>
  );
};

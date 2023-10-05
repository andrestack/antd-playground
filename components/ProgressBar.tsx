import { Progress, ConfigProvider } from "antd";
import { FC } from "react";
import { useSlider } from "../hooks/useSlider";

const ProgressBar: FC<{ hours: number }> = ({ hours }) => {
  // const percentage = Math.round((hours / 24) * 100);
  const { sleeping, eating, working } = useSlider();
  const totalHours = 24 - sleeping - eating - working;
  const sleepingPercentage = Math.round((sleeping / 24) * 100);
  const eatingPercentage = Math.round((eating / 24) * 100);
  const workingPercentage = Math.round((working / 24) * 100);
  const totalHoursPercentage = Math.round((totalHours / 24) * 100);

  return (
    <div className="items-center">
      {/* <ConfigProvider
        theme={{
          token: {
            colorSuccess: "none",
          },
          components: {
            Progress: {
              defaultColor: "none",
            },
          },
        }}
      > */}
      <Progress
        data-testid="progress-bar"
        type="circle"
        percent={
          sleepingPercentage > 0
            ? sleepingPercentage
            : eatingPercentage > 0
            ? eatingPercentage
            : workingPercentage
        }
        success={{ percent: totalHoursPercentage }}
        strokeColor={
          sleepingPercentage ? "purple" : eatingPercentage ? "yellow" : "orange"
        }
        format={() =>
          totalHours > 0 ? (
            <>
              <div>{`${totalHours} h`}</div>
              <div className="p-5">left</div>
            </>
          ) : (
            <div className="text-sm">no more time left</div>
          )
        }
      />
      {/* </ConfigProvider> */}
    </div>
  );
};

export default ProgressBar;

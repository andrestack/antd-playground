import { Progress, ConfigProvider } from "antd";
import { FC } from "react";
import { useSlider } from "../hooks/useSlider";

const ProgressBar: FC<{ hours: number }> = ({ hours }) => {
  // const percentage = Math.round((hours / 24) * 100);
  const { sleeping, eating, working } = useSlider();
  const totalHours = hours - sleeping - eating - working;
  const percentage = Math.round((totalHours / 24) * 100);
  const left = 24 - sleeping - eating - working;


  return (
    <div className="items-center">
      <ConfigProvider
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
      >
        <Progress
          data-testid="progress-bar"
          type="circle"
          percent={left}
          success={{ percent: percentage }}
          strokeColor={left <= 8 ? "purple" : left <= 16 ? "yellow" : "none"}
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
      </ConfigProvider>
    </div>
  );
};

export default ProgressBar;

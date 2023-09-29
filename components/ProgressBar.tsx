import { Progress, ConfigProvider } from "antd";
import { FC } from "react";
import { useSlider } from "../hooks/useSlider";

const ProgressBar: FC<{ hours: number }> = ({ hours }) => {
  // const percentage = Math.round((hours / 24) * 100);
  const { sleeping, eating, working } = useSlider();
  const totalHours = sleeping + eating + working;
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
          percent={totalHours}
          success={{ percent: totalHours }}
          strokeColor={left <= 8 ? "purple" : left <= 16 ? "yellow" : "orange"}
          format={() =>
            totalHours > 0 ? (
              <>
                <div>{`${totalHours} h`}</div>

                <div className="p-5">left</div>
              </>
            ) : (
              <div className="text-lg">no more time left</div>
            )
          }
        />
      </ConfigProvider>
    </div>
  );
};

export default ProgressBar;

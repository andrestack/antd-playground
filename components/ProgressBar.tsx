import { Progress, ConfigProvider } from "antd";
import { FC } from "react";
import { useSlider } from "../hooks/useSlider";

const ProgressBar: FC = () => {
  // const percentage = Math.round((hours / 24) * 100);
  const { sleeping, eating, working } = useSlider();
  const totalHours = sleeping + eating + working;

  let color;
  if (totalHours < 8) {
    color = "green";
  } else if (totalHours < 16) {
    color = "yellow";
  } else if (totalHours < 24) {
    color = "orange";
  }

  return (
    <div className="items-center">
      <ConfigProvider
        theme={{
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
        strokeColor={color}
      />
      <Progress
        data-testid="progress-bar"
        type="circle"
        percent={totalHours}
        success={{ percent: totalHours }}
        strokeColor={color}
      />
      <Progress
        data-testid="progress-bar"
        type="circle"
        percent={totalHours}
        success={{ percent: totalHours }}
        strokeColor={color}
      />

      </ConfigProvider>
    </div>
  );
};

export default ProgressBar;

import { Progress, ConfigProvider } from "antd";
import { FC } from "react";
import { useSlider } from "../context/SliderContext";

const ProgressBar: FC<{ hours: any }> = ({ hours }) => {
  // const percentage = Math.round((hours / 24) * 100);
  const { value } = useSlider();
  
  let color;
  if (value < 8) {
    color = "none";
  } else if (value < 16) {
    color = "yellow";
  } else if (value < 24) {
    color = "orange";
  }

  return (
    <>
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
          data-testid="time-24"
          type="circle"
          percent={value}
          success={{ percent: value }}
          strokeColor={color}
        />
      
      </ConfigProvider>
    </>
  );
};

export default ProgressBar;

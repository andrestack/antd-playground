import { Progress } from "antd";
import { FC } from "react";

const ProgressBar: FC<{ hours: any }> = ({ hours }) => {
  const percentage = Math.round((hours / 24) * 100);
  let color;
  if (percentage < 33) {
    color = "green";
  } else if (percentage < 66) {
    color = "yellow";
  } else if (percentage < 100) {
    color = "orange";
  }

  return <Progress data-testid="time-24" type="circle" percent={percentage} strokeColor={color} />;
};

export default ProgressBar;

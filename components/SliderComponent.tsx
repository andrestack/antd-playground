import React, { useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";
import { useSlider } from "../hooks/useSlider"

const SliderComponent: React.FC<{activity: 'sleeping'| 'eating'| 'working'}> = ({activity}) => {
  const { [activity]: value, [`set${capitalize(activity)}`]: setValue } = useSlider();


  const handleInputChange = (newValue: number | null) => {
    if (newValue !== null) setValue(newValue);
  };

  return (
    <Row className="p-10">
      <Col span={6}>
        <Slider
          min={0}
          max={100}
          onChange={handleInputChange}
          value={typeof value === "number" ? value : 0}
        />
      </Col>
      <Col span={6}>
        <InputNumber
          min={0}
          max={24}
          style={{ margin: "0 16px" }}
          value={value}
          onChange={handleInputChange}
        />
      </Col>
    </Row>
  );
};

export default SliderComponent;
function capitalize(activity: string) {
  throw new Error("Function not implemented.");
}


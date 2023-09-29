import React, { useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";
import { useSlider } from "../hooks/useSlider"

const SliderComponent: React.FC = () => {
  const { value, setValue } = useSlider();


  const handleInputChange = (newValue: number | null) => {
    if (newValue !== null) setValue(newValue);
  };

  return (
    <Row>
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

import React, { useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";

const SliderComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (newValue: number | null) => {
    if (newValue !== null) setInputValue(newValue);
  };

  return (
    <Row>
      <Col span={10}>
        <Slider
          min={0}
          max={24}
          onChange={handleInputChange}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={24}
          style={{ margin: "0 16px" }}
          value={inputValue}
          onChange={handleInputChange}
        />
      </Col>
    </Row>
  );
};

export default SliderComponent;

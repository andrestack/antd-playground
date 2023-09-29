
import { Col, InputNumber, Row, Slider, Space } from "antd";
import { useSlider } from "../hooks/useSlider"

const SliderComponent: React.FC<{activity: 'sleeping'| 'eating'| 'working'}> = ({activity}) => {
  
  function capitalize(s: string) {
    if(typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  
  const { [activity]: value, [`set${capitalize(activity)}`]: setValue } = useSlider();


  const handleInputChange = (newValue: number | null) => {
    if (newValue !== null) setValue(newValue);
  };

  return (
    <Row className="p-10">
      <Col span={6}>
        <Slider
        
          min={0}
          max={24}
          onChange={handleInputChange}
          value={value}
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



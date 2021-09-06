import {Slider} from 'antd';

const PriceSlider = (props) => {
  return (
    <Slider range defaultValue={[2000, 5000]} min={0} max={props.max} tooltipVisible />
  );
};

export default PriceSlider;

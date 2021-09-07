import {Slider} from 'antd';

const PriceSlider = (props) => {
  return (
    <Slider range defaultValue={[0, 10000]} min={0} max={10000} tooltipVisible tooltipPlacement='bottom' onAfterChange={props.onAfterChange} />
  );
};

export default PriceSlider;

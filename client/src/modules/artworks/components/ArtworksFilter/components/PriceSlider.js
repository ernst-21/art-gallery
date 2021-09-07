import {Slider} from 'antd';

const PriceSlider = (props) => {
  return (
    <Slider range defaultValue={[0, props.max]} min={0} max={props.max} tooltipVisible tooltipPlacement='bottom' />
  );
};

export default PriceSlider;

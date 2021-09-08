import {Slider} from 'antd';

const SliderFilter = (props) => {
  return (
    <Slider range defaultValue={[props.min, props.max]} min={props.min} max={props.max} tooltipVisible tooltipPlacement='bottom' onAfterChange={props.onAfterChange} />
  );
};

export default SliderFilter;

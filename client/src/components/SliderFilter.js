import {memo} from 'react';
import {Slider} from 'antd';

const SliderFilter = (props) => {
  return (
    <Slider range defaultValue={props.defaultValue} min={props.min} max={props.max} tooltipVisible tooltipPlacement='bottom' onAfterChange={props.onAfterChange} />
  );
};

export default memo(SliderFilter);

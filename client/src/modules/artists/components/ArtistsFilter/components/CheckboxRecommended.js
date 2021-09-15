import {memo} from 'react';
import {Checkbox} from 'antd';

const CheckboxRecommended = (props) => {
  return (
    <Checkbox checked={props.checked} onChange={props.onChange}>Recommended</Checkbox>
  );
};

export default memo(CheckboxRecommended);

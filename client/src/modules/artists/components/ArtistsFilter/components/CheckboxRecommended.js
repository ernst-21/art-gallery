import {Checkbox} from 'antd';

const CheckboxRecommended = (props) => {
  return (
    <Checkbox onChange={props.onChange}>Recommended</Checkbox>
  );
};

export default CheckboxRecommended;

import {memo} from 'react';
import {Select} from 'antd';

const {Option} = Select;

const SelectElements = (props) => {

  return (
    <>
      <p>{props.label}</p>
      <Select onChange={props.onChange} defaultValue={props.defaultValue} className='select-elements'>
        {props.elements.sort().map((item, i) => (<Option key={i} value={item}>{item}</Option>))}
      </Select>
    </>

  );
};

export default memo(SelectElements);

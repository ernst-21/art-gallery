import {Select} from 'antd';

const {Option} = Select;

const SelectElements = (props) => {
  return (
    <>
      <p>{props.label}</p>
      <Select onChange={props.onChange} defaultValue='All' className='select-elements'>
        {props.elements.sort().map((item, i) => (<Option key={i} value={item}>{item}</Option>))}
      </Select>
    </>

  );
};

export default SelectElements;

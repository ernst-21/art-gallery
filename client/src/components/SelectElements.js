import {Select} from 'antd';

const {Option} = Select;

const SelectElements = (props) => {
  return (
    <>
      <p>{props.label}</p>
      <Select defaultValue='All' className='select-elements'>
        {props.elements.sort().map((item, i) => (<Option key={i} >{item}</Option>))}
      </Select>
    </>

  );
};

export default SelectElements;

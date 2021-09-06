import {Radio} from 'antd';
import {colors} from '../../../../../mockData';

const ColorRadio = () => {
  return (
    <>
      <p>Select dominant color of artwork:</p>
      <Radio.Group defaultValue="all" buttonStyle="solid">
        {colors.map(color => (<Radio value={color.color} key={color.id}><div style={color.style}>{''}</div></Radio>))}
        <Radio value='all'>All</Radio>
      </Radio.Group>
    </>
  );
};

export default ColorRadio;

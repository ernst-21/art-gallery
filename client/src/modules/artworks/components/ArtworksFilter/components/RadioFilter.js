import { useRef, memo } from 'react';
import { Radio } from 'antd';

const RadioFilter = (props) => {
  const nodeRef = useRef();

  return (
    <div>
      <p>{props.title}</p>
      <Radio.Group
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        buttonStyle="solid"
      >
        {props.elements.map((item) => (
          <Radio ref={nodeRef} value={item.value} key={item.id}>
            <div style={item.style}>{item.content}</div>
            {props.isCategory && (
              <div style={{ textAlign: 'center' }}>{item.category}</div>
            )}
          </Radio>
        ))}
        <Radio value="All">All</Radio>
      </Radio.Group>
    </div>
  );
};

export default memo(RadioFilter);

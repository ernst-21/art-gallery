import React from 'react';
import { Radio, Tooltip } from 'antd';

const RadioFilter = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <Radio.Group defaultValue="all" buttonStyle="solid">
        {props.elements.map((item) => (
          <Radio value={item.value} key={item.id}>
            <Tooltip title={item.value}>
              <div style={item.style}>{item.content}</div>
            </Tooltip>
          </Radio>
        ))}
        <Radio value="all">All</Radio>
      </Radio.Group>
    </div>
  );
};

export default RadioFilter;

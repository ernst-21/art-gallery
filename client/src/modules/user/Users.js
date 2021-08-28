import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { list } from './api-user';
import { List, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const {Title} = Typography;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <List
      itemLayout="horizontal"
      style={{marginTop: '2rem'}}
      dataSource={users}
      renderItem={item => (
        <Link to={'/user/' + item._id}>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={55} src={item.pic} icon={<UserOutlined/>} /> }
            />
            <Title level={4}>{item.name}</Title>
          </List.Item>
        </Link>
      )}
    />
  );
};

export default Users;

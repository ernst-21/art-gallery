import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import auth from '../auth/auth-helper';
import { read } from './api-user';
import { Typography, Avatar} from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import DeleteUser from './DeleteUser';
import { useQuery } from 'react-query';
import SpinLoader from '../../components/SpinLoader';

const { Title } = Typography;

const Profile = () => {
  const jwt = auth.isAuthenticated();
  const userId = useParams().userId;

  const { data: user, isLoading, error } = useQuery(
    ['user', userId],
    () =>
      read({ userId: userId }, { t: jwt.token })
        .then(data => data)
  );

  if (!auth.isAuthenticated()) {
    return <Redirect to="/signin" />;
  }

  if (error) {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="profile-card-container">
      {isLoading ? (
        <SpinLoader />
      ) : (user &&
        <div className='profile-card'>
          <Title level={3}>Profile</Title>
          <Avatar size={130} src={user.pic} icon={<UserOutlined />} />
          <Title level={2}>{user.name}</Title>
          <div>
            <Title level={4}>{user.email}</Title>
            <Link to={'/user/edit/' + user._id}>
              <EditOutlined style={{ fontSize: '1.5rem' }} />
              <h4>Edit</h4>
            </Link>
            <DeleteUser
              userId={user._id}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

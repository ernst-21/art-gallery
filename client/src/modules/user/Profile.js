import { useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import auth from '../auth/auth-helper';
import { read } from './api-user';
import { Typography, Avatar } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import DeleteUser from './DeleteUser';
import { useQuery, useMutation } from 'react-query';
import { userArtworks } from '../artworks/api-artworks';
import SpinLoader from '../../components/SpinLoader';
import ElementsGrid from '../../components/ElementsGrid';

const { Title } = Typography;

const Profile = () => {
  const jwt = auth.isAuthenticated();
  const userId = useParams().userId;
  const [profileArtworks, setProfileArtworks] = useState([]);

  const { data: user, isLoading, isError } = useQuery(
    ['user', userId],
    () =>
      read({ userId: userId }, { t: jwt.token })
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => userArtworksMutation({ userId: data._id })
    }
  );

  const { mutate: userArtworksMutation, status } = useMutation(
    (user) =>
      userArtworks(user)
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => setProfileArtworks(data)
    }
  );

  if (!auth.isAuthenticated()) {
    return <Redirect to="/signin" />;
  }

  if (isError || status === ' error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="profile-card-container">
      {isLoading ? (
        <SpinLoader />
      ) : (
        user && (
          <>
            <div className="profile-card">
              <Title level={3}>Profile</Title>
              <Avatar size={130} src={user.pic} icon={<UserOutlined />} />
              <Title level={2}>{user.name}</Title>
              <div>
                <Title level={4}>{user.email}</Title>
                <Link to={'/user/edit/' + user._id}>
                  <EditOutlined style={{ fontSize: '1.5rem' }} />
                  <h4>Edit</h4>
                </Link>
                <DeleteUser userId={user._id} />
              </div>
            </div>
            {profileArtworks.length > 0 && (
              <div className="my-artworks__container">
                <ElementsGrid
                  artworks={true}
                  elements={profileArtworks}
                  title="My favorite artworks"
                />
              </div>
            )}
          </>
        )
      )}
    </div>
  );
};

export default Profile;

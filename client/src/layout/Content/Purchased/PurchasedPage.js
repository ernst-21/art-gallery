import { useState, useMemo } from 'react';
import { listPurchased } from '../../../modules/artworks/api/api-artworks';
import { useQuery } from 'react-query';
import { Avatar, Divider, List, Skeleton, Empty } from 'antd';
import { Redirect, useParams } from 'react-router-dom';
import auth from '../../../modules/auth/api/auth-helper';

const PurchasedPage = () => {
  const userId = useParams().userId;
  const arr = useMemo(() => [1, 2, 3, 4, 5], []);
  const [totalPrice, setTotalPrice] = useState(0);
  const {
    data: purchasedItems = [],
    isLoading,
    status
  } = useQuery(
    'purchased',
    () =>
      listPurchased({ userId: userId })
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        if (data.length > 1) {
          setTotalPrice(
            data.reduce((total, currentItem) => total + currentItem.price, 0)
          );
        } else if (data.length === 1) {
          setTotalPrice(data[0].price);
        } else {
          return totalPrice;
        }
      }
    }
  );

  if (!auth.isAuthenticated()) {
    return <Redirect to="/signin" />;
  }

  if (isLoading) {
    return (
      <div className="purchased-page__skeleton">
        {arr.map((item) => (
          <Skeleton key={item} avatar title={false} active />
        ))}
      </div>
    );
  }

  if (!purchasedItems || purchasedItems.length === 0) {
    return (
      <div className='purchased-page__empty'>
        <Empty description={<p>No purchased artworks</p>} />
      </div>
    );
  }

  if (status === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="purchased-page">
      <List
        className="purchased-list"
        itemLayout="horizontal"
        dataSource={purchasedItems}
        pagination={{
          pageSize: 5
        }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar className="purchased-list__avatar" src={item.url} />
              }
              title={item.name}
              description={[
                item.category.charAt(0).toUpperCase() +
                  item.category.slice(1) +
                  ' -/- ' +
                  'id: ' +
                  item._id
              ]}
            />
            <div>
              <p>{item.id}</p>
            </div>
            <div>
              <h3>${item.price}</h3>
            </div>
          </List.Item>
        )}
      />
      <Divider />
      <div className="purchased-list-price__container">
        <div>
          <h2>Total: ${totalPrice}</h2>
        </div>
      </div>
    </div>
  );
};

export default PurchasedPage;

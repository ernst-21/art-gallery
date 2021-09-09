import { FaShoppingCart } from 'react-icons/fa';
import { Space } from 'antd';
import { Redirect } from 'react-router-dom';
import useListCartElements from '../../hooks/useListCartElements';

const CartIconComponent = () => {
  const {cartElements, isError} = useListCartElements();

  if (isError) {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <Space>
      <FaShoppingCart
        style={{ fontSize: '22px', marginTop: '1.2rem' }}
      />
      <p style={{ marginTop: '1rem' }}>{cartElements.length}</p>
    </Space>
  );
};

export default CartIconComponent;

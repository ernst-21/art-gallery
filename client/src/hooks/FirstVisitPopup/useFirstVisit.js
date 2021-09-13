import { useState } from 'react';
import {Modal} from 'antd';

const useFirstVisit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function info() {
    Modal.info({
      title: 'Important',
      width: 1000,
      visible: isModalVisible,
      content: (
        <div>
          <h2>Welcome to VRTL</h2>
          <p>This is a demo website that uses <a href='https://unsplash.com/'>Unsplash</a> images. Images in this demo website have no commercial purposes and the real authors as well as the real images can be found in <a href='https://unsplash.com/'>Unsplash</a> website. The main goal of this demo is to emulate functionalities of an e-commerce based on artworks products. Authors, prices & names of artworks are fictitious and as mentioned above have no commercial purposes.</p>
        </div>
      ),
      onOk() {
        console.log(isModalVisible);
        setIsModalVisible(false);
        localStorage.setItem('visited', 'true');
      },
    });
  }
  return {info, setIsModalVisible};
};

export default useFirstVisit;

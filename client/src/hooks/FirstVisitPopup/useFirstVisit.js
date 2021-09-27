import { useState } from 'react';
import {Modal} from 'antd';

const useFirstVisit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function info() {
    Modal.info({
      title: 'Important',
      icon: null,
      width: 1000,
      visible: isModalVisible,
      content: (
        <div>
          <h2>Welcome to VRTL</h2>
          <p>This is a demo website that uses <a href='https://unsplash.com/' target="_blank" rel="noopener noreferrer">Unsplash</a> images. Images in this demo website have no commercial purposes and the real authors as well as the real images can be found in <a href='https://unsplash.com/' target="_blank" rel="noopener noreferrer">Unsplash</a> website. The main goal of this demo is to emulate functionalities of an e-commerce based on artworks products. Authors, prices & names of artworks are fictitious and as mentioned above have no commercial purposes. Taking into account that artists in the demo are not real, social links associated with each artist just redirect to the home page of each social icon.</p><br/><p>This demo is a clone of the main functionalities and user experience provided by a randomly picked <a href='https://www.virtualgallery.com/artworks' target="_blank" rel="noopener noreferrer">Virtual Art Gallery in Internet</a>.</p>
        </div>
      ),
      onOk() {
        setIsModalVisible(false);
        localStorage.setItem('visited', 'true');
      },
    });
  }
  return {info, setIsModalVisible};
};

export default useFirstVisit;

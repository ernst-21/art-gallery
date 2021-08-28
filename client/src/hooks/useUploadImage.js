import {useState} from 'react';

const useUploadImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  const uploadPic = (img) => {

    const data = new FormData();
    data.append('file', img);
    data.append('upload_preset', 'mern-boilerplate');
    data.append('cloud_name', 'ernst1');
    fetch('https://api.cloudinary.com/v1_1/ernst1/image/upload', {
      method: 'POST',
      body: data
    })
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const deleteImageUrl = () => {
    setImageUrl(null);
  };

  return {imageUrl, uploadPic, deleteImageUrl};
};

export default useUploadImage;

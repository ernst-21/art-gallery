import React from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';


function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const AvatarUpload = (props) => {

  const uploadButton = (
    <div>
      {props.img ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );


  return (
    <div className='upload-avatar__container'>
      <ImgCrop rotate>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          onChange={props.onChange}
          showUploadList={false}
          multiple={false}
          customRequest={props.customRequest}
          beforeUpload={beforeUpload}>
          {props.img && props.url ? <img src={props.src} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
      </ImgCrop>
      {props.img && <DeleteOutlined onClick={props.handleDelete} />}
    </div>
  );
};

export default AvatarUpload;

import {Typography} from 'antd';

const {Title} = Typography;

const SectionTitle = (props) => {
  return (
    <Title className='section-title' level={1}>{props.title}</Title>
  );
};

export default SectionTitle;

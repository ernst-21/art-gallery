import { Tabs } from 'antd';
import {useQuery} from 'react-query';
import {listArtworks} from '../../artworks/api/api-artworks';
import ElementsGrid from '../../../components/ElementsGrid';
import SpinLoader from '../../../components/SpinLoader';
import { Redirect } from 'react-router-dom';

const { TabPane } = Tabs;

const GalleriesTabs = () => {
  const {data: galleries = [], isLoading, isError} = useQuery('galleries', () => listArtworks().then(res => res.json()).then(data => data));
  const parisCollection = galleries.filter(item => item.gallery === 'Paris');
  const londonCollection = galleries.filter(item => item.gallery === 'London');
  const berlinCollection = galleries.filter(item => item.gallery === 'Berlin');
  const nyCollection = galleries.filter(item => item.gallery === 'New York');

  if (isError) {
    return <Redirect to="/info-network-error" />;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab='Paris' key="1">
        <ElementsGrid elements={parisCollection} artworks={true} />
      </TabPane>
      <TabPane tab="Berlin" key="2">
        <ElementsGrid elements={berlinCollection} artworks={true} />
      </TabPane>
      <TabPane tab="London" key="3">
        <ElementsGrid elements={londonCollection} artworks={true} />
      </TabPane>
      <TabPane tab="New York" key="4">
        <ElementsGrid elements={nyCollection} artworks={true} />
      </TabPane>
    </Tabs>
  );
};

export default GalleriesTabs;

import { Tabs } from 'antd';
import {artworks} from '../../mockData';
import ElementsGrid from '../../components/ElementsGrid';

const { TabPane } = Tabs;

const GalleriesTabs = () => {
  const parisCollection = artworks.filter(item => item.gallery === 'Paris');
  const londonCollection = artworks.filter(item => item.gallery === 'London');
  const berlinCollection = artworks.filter(item => item.gallery === 'Berlin');
  const nyCollection = artworks.filter(item => item.gallery === 'New York');
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Paris" key="1">
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

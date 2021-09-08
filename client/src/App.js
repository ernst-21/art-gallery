import React from 'react';
import { FilterProvider } from './context/FilterContext';
import { ArtistFilterProvider } from './context/ArtistFilterContext';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import MainRouter from './MainRouter';
import Navbar from './layout/Navbar/Navbar';
import FooterComponent from './layout/Footer/FooterComponent';

const { Header, Content } = Layout;

function App() {
  return (
    <FilterProvider>
      <ArtistFilterProvider>
        <Layout>
          <BrowserRouter>
            <Header>
              <Navbar />
            </Header>
            <Content style={{ marginTop: 50 }}>
              <MainRouter />
            </Content>
          </BrowserRouter>
          <FooterComponent />
        </Layout>
      </ArtistFilterProvider>
    </FilterProvider>
  );
}

export default App;

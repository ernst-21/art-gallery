import { useEffect } from 'react';
import { FilterProvider } from './context/FilterContext';
import { ArtistFilterProvider } from './context/ArtistFilterContext';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import MainRouter from './MainRouter';
import Navbar from './layout/Navbar/Navbar';
import FooterComponent from './layout/Footer/FooterComponent';
import useFirstVisit from './hooks/FirstVisitPopup/useFirstVisit';

const { Header, Content } = Layout;

function App() {
  const { info, setIsModalVisible } = useFirstVisit();

  useEffect(() => {
    let firstVisit = localStorage.getItem('visited');
    let timer;
    if (firstVisit !== 'true') {
      timer = setTimeout(() => {
        setIsModalVisible(true);
        info();
      }, 8000);
    }
    return () => clearTimeout(timer);
    //eslint-disable-next-line
  }, []);

  return (
    <CartProvider>
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
    </CartProvider>
  );
}

export default App;

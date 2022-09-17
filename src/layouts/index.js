import React from 'react';
import Header from '../components/molecules/Header';
import Footer from '../components/molecules/Footer';
import { Typography, Layout } from 'antd';
const { Title } = Typography;
const { Content } = Layout;

const LayoutMain = ({ children }) => (
   <Layout className="layout">
      <Header />
      <Content>
         <Title className="footer" level={1}>
            PRODITTI
         </Title>
         <div className="site-layout-content">{children}</div>
      </Content>
      <Footer />
   </Layout>
);

export default LayoutMain;

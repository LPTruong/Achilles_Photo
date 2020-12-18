import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import { Image } from 'antd';
import corgi1 from "./assets/corgi1.jpg"
import corgi2 from "./assets/corgi2.jpg"
import corgi3 from "./assets/corgi3.jpg"
import corgi4 from "./assets/corgi4.jpg"
import corgi5 from "./assets/corgi5.jpg"
import corgi6 from "./assets/corgi6.jpg"
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const { Search } = Input;
const onSearch = value => console.log(value);
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  return (
    <Layout>  
<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
      <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',  
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}> 
        <Menu.Item key="1" icon={<UploadOutlined />}>
          Picture
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Album
        </Menu.Item>
        <Menu.Item key="3" icon={<CloudOutlined />}>
          Sharing
        </Menu.Item>
        <Menu.Item key="4" icon={<ShopOutlined />}>
          Bin
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        </div>
        <div className="images-grid-2"> 
            <div>
            <Image
            width={200}
            src = {corgi1}
            />
            <Image
            width={200}
            src = {corgi2}
            />
            </div>
            <div>
            <Image
            width={200}
            src = {corgi3}
            />
            <Image
            width={200}
            src = {corgi4}
            />
            </div>
        </div>
    
  );
      </Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>
  </Layout>
  )
}

export default App;
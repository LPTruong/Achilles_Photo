import SelectedImage from "./SelectedImage";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.js";
import { Layout, Menu } from "antd";
import { Image } from "antd";
import { Input } from "antd";
import ImageGallery from 'react-image-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import { AudioOutlined } from "@ant-design/icons";

import ReactBnbGallery from 'react-bnb-gallery';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Header, Content, Footer, Sider } = Layout;
const Logged = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SelectedImage
        selected={selectAll ? true : false}
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}

      />
    ),
    [selectAll]
  );
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal"> 
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
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <br />
        <br />
        <br />
        <br />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
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
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          ></div>
          <p>
        <button onClick={toggleSelectAll}>toggle select all</button>
        
      </p>
      <Gallery photos={photos} renderImage={imageRenderer} />
      <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
      <button onClick={() => setIsOpen(true)}>
          Open gallery
        </button>
      <ReactBnbGallery
          show={isOpen}
          photos={photos}
          onClose={() => setIsOpen(false)}
        />
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
};

export default Logged;

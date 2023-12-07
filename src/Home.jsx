import { useState } from "react";
import { FontSizeOutlined, UserOutlined, UsbOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children, onSelect) {
  return {
    key,
    icon,
    children,
    label,
    onSelect,
  };
}

const Home = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuNavigator = ({ key }) => {
    console.log("called");
    navigate(`/${key}`);
  };

  const items = [
    getItem("リクエストコード生成", "request_generator", <FontSizeOutlined />),
    getItem("リクエストコード検証", "verify", <UsbOutlined />),
    getItem("開発テスト", "preview", <UserOutlined />),
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: "heavy",
            color: "rgba(255, 255, 255, 0.65)",
            padding: 16,
          }}
        >
          Menu
        </div>
        {/* <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button> */}
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onSelect={menuNavigator}
          inlineCollapsed={collapsed}
        />
      </Sider>
      <Layout>
        <Header
          theme="dark"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 32,
            }}
          >
            LLM-Proxyer
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          {/* Ant Design ©2023 Created by Ant UED */}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;

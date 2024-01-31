import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
   const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [{
    key: 'async-await-example',
    label : <Link to='/async-await-example'>Async Await Example</Link>
  }]
  return (
    <Layout>
     <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo" > <Link to="/">Logo</Link></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default MainLayout;
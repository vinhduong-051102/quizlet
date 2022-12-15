import { Link, Route, Routes } from 'react-router-dom';
import Register from './features/Register';
import React from 'react';
import Login from './features/Login';
import Home from './features/Home';
import { Layout, Button, Popover, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Header, Content } = Layout;

const PopoverModal = () => {
  const { t } = useTranslation();
  return (
    <Menu items={[{ label: <Link to="/login">{t('common.logout')}</Link> }]} />
  );
};

const ComponentLogged = ({ children }) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleChangeOpen = (isOpen) => {
    setOpen(isOpen);
  };
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: '#0a092d',
          color: '#fff',
          border: '1px solid #282e3e',
          borderLeft: 'none',
          borderRight: 'none',
          padding: '0 30px',
          fontSize: 30,
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <Link to="/" style={{ color: 'inherit' }}>
            Quizlet
          </Link>
          <Button
            type="primary"
            style={{ backgroundColor: '#4255ff', fontWeight: 'bold' }}
          >
            {t('common.create')}
          </Button>
        </div>
        <Popover
          open={open}
          onOpenChange={handleChangeOpen}
          trigger="click"
          content={PopoverModal}
        >
          <Button shape="round" size="large">
            <UserOutlined />
          </Button>
        </Popover>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ComponentLogged>
            <Home />
          </ComponentLogged>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

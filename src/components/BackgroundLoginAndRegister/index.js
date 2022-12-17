import React from 'react';
import bg from '../../assets/images/login-bg.png';
import { Row, Col, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const Background = ({ children }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const items = [
    {
      key: 'login',
      label: t('common.login'),
    },
    {
      key: 'register',
      label: t('common.register'),
    },
  ];
  const [activeKey, setActiveKey] = React.useState(items[0].key);
  const handleClickMenu = (e) => {
    navigate(`/${e.key}`);
  };

  React.useEffect(() => {
    const urlArr = window.location.href.split('/');
    setActiveKey(urlArr[urlArr.length - 1]);
  }, []);

  return (
    <Row style={{ width: '100%', height: '100%' }}>
      <Col lg={12} xl={12} xxl={12} xs={0} sm={0} md={0}>
        <img src={bg} alt="" style={{ height: '100%', width: '100%' }} />
      </Col>
      <Col lg={12} xl={12} xxl={12} xs={24} sm={24} md={24}>
        <Menu
          items={items}
          mode="horizontal"
          selectedKeys={[activeKey]}
          onClick={handleClickMenu}
        />
        {children}
      </Col>
    </Row>
  );
};

export default Background;

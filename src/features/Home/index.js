import React from 'react';
import { Container, TitleStyled } from './styles';
import Unit from '../../components/Unit';
import { Col, Row } from 'antd';
import { t } from 'i18next';


const Home = () => {
  return (
    <Container style={{minHeight: 'calc(100vh - 64px)'}}>
      <TitleStyled>{t('home.yourLessons')}</TitleStyled>
      <Row gutter={[42, 42]} justify="space-around" align="middle">
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
          <Unit title="unit 1" subTitle="25 từ mới" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
          <Unit title="unit 1" subTitle="25 từ mới" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
          <Unit title="unit 1" subTitle="25 từ mới" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

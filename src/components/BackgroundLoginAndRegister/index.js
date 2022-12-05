import { Container, ImageWrapper } from './styles';
import bg from '../../assets/images/login-bg.png';
import { Row, Col } from 'antd';

const Background = ({ children }) => {
  return (
    <Row style={{ width: '100%', height: '100%' }}>
      <Col span={12}>
        <img src={bg} alt="" style={{ height: '100%', width: '100%' }} />
      </Col>
      <Col span={12}>{children}</Col>
    </Row>
  );
};

export default Background;

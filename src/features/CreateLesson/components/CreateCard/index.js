import React, { useState } from 'react';
import {
  CardStyled,
  TitleContainer,
  ButtonStyled,
  InputStyled,
  Note,
} from './styles';
import { DeleteOutlined, MenuOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

const Title = ({ index }) => {
  return (
    <TitleContainer>
      <div>{index}</div>
      <div style={{ display: 'flex', gap: 20 }}>
        <ButtonStyled
          type="text"
          shape="circle"
          icon={<MenuOutlined />}
          size="large"
        />
        <ButtonStyled
          type="text"
          shape="circle"
          icon={<DeleteOutlined />}
          size="large"
        />
      </div>
    </TitleContainer>
  );
};

const CreateCard = ({ index }) => {
  const { t } = useTranslation();
  const [isTypeVocabulary, setIsTypeVocabulary] = useState(false);
  const [isTypeMeaning, setIsTypeMeaning] = useState(false);
  const [vocabulary, setVocabulary] = useState('');
  const [meaning, setMeaning] = useState('');

  const handleInputVocabulary = (e) => {
    setVocabulary(e.target.value);
    setIsTypeVocabulary(true);
  };

  const handleInputMeaning = (e) => {
    setMeaning(e.target.value);
    setIsTypeMeaning(true);
  };

  return (
    <CardStyled
      title={<Title index={index} />}
      bordered={false}
      headStyle={{ color: '#fff' }}
    >
      <Row gutter={[42, 42]} style={{ marginTop: 30 }}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <InputStyled value={vocabulary} onChange={handleInputVocabulary} />
          <Note>
            {isTypeVocabulary && vocabulary.length === 0
              ? t('createLesson.requiredVocabulary')
              : t('createLesson.vocabulary')}
          </Note>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <InputStyled value={meaning} onChange={handleInputMeaning} />
          <Note>
            {isTypeMeaning && meaning.length === 0
              ? t('createLesson.requiredMeaning')
              : t('createLesson.meaning')}
          </Note>
        </Col>
      </Row>
    </CardStyled>
  );
};

export default CreateCard;

import React from 'react';
import { Container, TitleStyled, InputStyled, TextAreaStyled } from './styles';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'antd';
import CreateCard from './components/CreateCard';
import AddNewCard from './components/AddNewCard';

const CreateLesson = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <TitleStyled>{t('createLesson.createLesson')}</TitleStyled>
      <Form>
        <Form.Item name="title" rules={[{required: true, message: t('createLesson.requiredTitle')}]}>
          <InputStyled placeholder={t('createLesson.inputTitle')} />
        </Form.Item>
        <Form.Item name="description">
          <TextAreaStyled placeholder={t('createLesson.inputDescription')} />
        </Form.Item>
        <Form.Item name="listCard">
          <CreateCard index={1}/>
          <CreateCard index={2}/>
          <AddNewCard/>
        </Form.Item>
      </Form>
      <Button>Xác nhận</Button>
    </Container>
  );
};

export default CreateLesson;

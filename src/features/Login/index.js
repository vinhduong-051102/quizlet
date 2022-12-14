import Container from '../../components/Container';
import {
  FormContainer,
  FormItemStyled,
  InputStyled,
  InputPasswordStyled,
  ButtonStyled,
} from './styles';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import BackgroundLoginAndRegister from '../../components/BackgroundLoginAndRegister';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [t] = useTranslation();
  const handleSubmit = () => {};
  return (
    <Container>
      <BackgroundLoginAndRegister>
        <FormContainer form={form} onFinish={handleSubmit}>
          <FormItemStyled
            name="username"
            labelCol={{ span: 24 }}
            wrapperCol={24}
            hasFeedback
            label={t('login.username')}
            rules={[
              {
                required: true,
                message: t('login.usernameIsRequired'),
              },
            ]}
          >
            <InputStyled />
          </FormItemStyled>
          <FormItemStyled
            name="password"
            labelCol={{ span: 24 }}
            hasFeedback
            wrapperCol={24}
            label={t('login.password')}
            rules={[
              {
                required: true,
                message: t('login.passwordIsRequired'),
              },
            ]}
          >
            <InputPasswordStyled />
          </FormItemStyled>
          <FormItemStyled style={{ marginTop: 40 }}>
            <ButtonStyled type="primary" onClick={() => form.submit()}>
              {t('common.submit')}
            </ButtonStyled>
          </FormItemStyled>
          <FormItemStyled style={{ marginTop: 40 }}>
            <ButtonStyled onClick={() => navigate('/register')}>
              {t('login.areYouHaveAccount')}
            </ButtonStyled>
          </FormItemStyled>
        </FormContainer>
      </BackgroundLoginAndRegister>
    </Container>
  );
};

export default Login;

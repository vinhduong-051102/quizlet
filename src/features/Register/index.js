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

const Register = () => {
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
            label={t('register.username')}
            rules={[
              {
                required: true,
                message: t('register.usernameIsRequired'),
              },
              {
                min: 5,
                message: t('register.usernameMin'),
              },
              {
                max: 20,
                message: t('register.usernameMax'),
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
            label={t('register.password')}
            rules={[
              {
                required: true,
                message: t('register.passwordIsRequired'),
              },
              {
                min: 5,
                message: t('register.usernameMin'),
              },
            ]}
          >
            <InputPasswordStyled />
          </FormItemStyled>
          <FormItemStyled
            name="rePassword"
            labelCol={{ span: 24 }}
            wrapperCol={24}
            label={t('register.rePassword')}
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: t('register.rePasswordIsRequired'),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(t('register.confirmPasswordNotMatch')),
                  );
                },
              }),
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
            <ButtonStyled onClick={() => navigate('/login')}>
              {t('register.areYouHaveAccount')}
            </ButtonStyled>
          </FormItemStyled>
        </FormContainer>
      </BackgroundLoginAndRegister>
    </Container>
  );
};

export default Register;

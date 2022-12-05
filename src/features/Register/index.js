
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

const Register = () => {
  const [form] = Form.useForm();
  const [t] = useTranslation();
  const handleSubmit = () => {
    
  };
  return (
    <Container>
      <BackgroundLoginAndRegister>
        <FormContainer form={form} onFinish={handleSubmit} >
          <FormItemStyled
            name="username"
            labelCol={{ span: 24 }}
            wrapperCol={24}
            label={t('register.username')}
            rules={[
              {
                required: true,
                message: t('register.usernameIsRequired'),
              },
            ]}
          >
            <InputStyled />
          </FormItemStyled>
          <FormItemStyled
            name="password"
            labelCol={{ span: 24 }}
            wrapperCol={24}
            label={t('register.password')}
            rules={[
              {
                required: true,
                message: t('register.passwordIsRequired'),
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
            rules={[
              {
                required: true,
                message: t('register.rePasswordIsRequired'),  
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
            <ButtonStyled onClick={handleSubmit}>
              {t('register.areYouHaveAccount')}
            </ButtonStyled>
          </FormItemStyled>
        </FormContainer>
      </BackgroundLoginAndRegister>
    </Container>
  );
};

export default Register;

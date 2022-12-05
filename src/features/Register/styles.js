import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

export const FormContainer = styled(Form)`
  /* width: 300px; */
  margin: 50px;
`;

export const FormItemStyled = styled(Form.Item)`
  label {
    color: #939bb4 !important;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.0625rem;
    line-height: 1.333333333333333;
  }
  .ant-form-item-row  {
    align-items: center !important;
  }
`;

export const InputStyled = styled(Input)`
  /* border: 0.125rem solid #303545; */
  padding: 0.75rem;
  transition: none 0.12s cubic-bezier(0.47, 0, 0.745, 0.715);
  font-size: 18px;
`;

export const InputPasswordStyled = styled(Input.Password) `
  /* border: 0.125rem solid #303545; */
  padding: 0.75rem;
  transition: none 0.12s cubic-bezier(0.47, 0, 0.745, 0.715);
  font-size: 18px;
`

export const ButtonStyled = styled(Button) `
  width: 100%;
  height: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  vertical-align: middle;
`

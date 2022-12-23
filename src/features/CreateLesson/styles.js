import styled from 'styled-components';
import { Input } from 'antd';

export const Container = styled.div`
  padding: 40px;
  background-color: #0a092d;
  color: #fff;
  min-height: calc(100vh - 64px);
`;

export const TitleStyled = styled.h1`
  color: #fff;
  margin-bottom: 40px;
`;

export const InputStyled = styled(Input) `
  font-size: 18px;
`

export const TextAreaStyled = styled(Input.TextArea) `
  font-size: 18px;
`

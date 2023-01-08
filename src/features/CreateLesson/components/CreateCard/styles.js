import styled from 'styled-components';
import { Card, Button } from 'antd';

export const CardStyled = styled(Card)`
  padding: 12px 16px;
  color: #fff;
  background-color: #2e3856;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonStyled = styled(Button)`
  color: #fff;
`;

export const InputStyled = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #fff;
  padding: 10px 0;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  &:focus {
    border-bottom: 3px solid #ffcd1f;
  }
`;

export const Note = styled.div`
  color: #c3c7d5;
  font-weight: 600;
  font-size: 12px;
  margin-top: 10px;
  text-transform: uppercase;
`

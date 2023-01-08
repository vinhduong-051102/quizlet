import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 100%;
  height: 117px;
  background-color: #2e3856;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  border: none;
  &:hover span {
    color: #ffcd1f;
    border-color: #ffcd1f;
  }
  @media only screen and (max-width: 768px) {
    height: 60px;
    font-size: 16px;
  }
`;

export const Text = styled.span`
  padding-bottom: 12px;
  border-bottom: 3px solid #3ccfcf;
  @media only screen and (max-width: 768px) {
    padding-bottom: 8px;
  }
`;

import styled from "styled-components";
import { Card } from "antd";

export const CardStyled = styled(Card) `
  padding: 12px 16px;
  color: #fff;
  background-color: #2e3856;
  border-radius: 10px;
  border-bottom: 3px solid transparent;
  .ant-card-head {
    padding: 0;
    border-bottom: none;
  }
  .ant-card-body {
    padding: 0;
    padding-bottom: 24px;
  }
  &:hover {
    border-bottom: 3px solid #fff;
  }
`;

export const TitleContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 10;
`

export const SubTitleStyled = styled.div `
  font-size: 16px;
  color: #586380;
  font-weight: normal;
`

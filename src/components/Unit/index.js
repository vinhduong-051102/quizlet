import React from 'react';
import { Link } from 'react-router-dom';
import { CardStyled, TitleContainer, SubTitleStyled } from './styles';

const Title = ({ title, subTitle }) => {
  return (
    <TitleContainer>
      <div>{title}</div>
      <SubTitleStyled>{subTitle}</SubTitleStyled>
    </TitleContainer>
  );
};

const Unit = ({ title, subTitle, userInfo, ...props }) => {
  return (
    <Link to="/login">
      <CardStyled
        bordered={false}
        title={<Title subTitle={subTitle} title={title} />}
        headStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}
        {...props}
      >
        {userInfo}
      </CardStyled>
    </Link>
  );
};

export default Unit;

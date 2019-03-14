import styled, { css } from 'styled-components';
import theme from 'shared/theme';

export const ReputationWrapper = styled.div`
  display: block;
  overflow: hidden;
`;
export const ThisContent = styled.div`
  align-self: stretch;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  flex: 1 1 auto;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  padding: 200px 0px;
  @media (max-width: 768px) {
    padding: 60px 0px;
  }
`;
export const ThisCopy = styled.p`
  font-weight: 300;
  margin-top: 16px;
  color: #000000;
  font-size: 28px;
  font-family: 'Lato', sans-serif;
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const Text = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  margin-right: 100px;
  font-family: 'Lato', sans-serif;

  @media (max-width: 1400px) {
    margin: 0 40px;
  }
`;

export const ThisTagline = styled.h2`
  font-size: 50px;
  font-weight: 300;
  color: #000000;
  font-family: 'Lato', sans-serif;
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 26px;
  }
`;

export const MembersList = styled.ul`
  float: left;
  width: 50%;
`;

export const MemberEach = styled.li`
  width: 33.3333%;
  max-width: 250px;
  float: left;
  list-style: none;
  padding: 20px;
`;

export const Actions = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: start;
    font-size: 18px;
  }
`;

export const BoldText = styled.span`
  font-weight: bold;
  font-family: 'Lato', sans-serif;
`;

export const WidgetWrapper = styled.div`
  padding: 10px 15px;
  border-radius: 9px;
  box-shadow: firebrick;
  -webkit-box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.16);
  margin-bottom: 0px;
  display: block;
  overflow: hidden;
`;
export const WidgetAvatar = styled.img`
  float: left;
  display: block;
  overflow: hidden;
  width: 60px;
  height: 60px;
`;
export const WidgetInfo = styled.div`
  display: block;
  overflow: hidden;
  float: left;
  margin-left: 20px;
`;
export const WidgetUserName = styled.p`
  color: #070707;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
`;

export const WidgetUserReputation = styled.p`
  font-size: 0.8em;
  font-weight: 300;
  font-family: 'Lato', sans-serif;
`;

export const WidgetUserReputationScore = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
`;
export const Br = styled.br`
  @media (max-width: 768px) {
    display: none;
  }
`;

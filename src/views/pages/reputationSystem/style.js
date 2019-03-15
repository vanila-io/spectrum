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
  @media (max-width: 420px) {
    padding: 0px;
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
  @media (max-width: 992px) {
    width: auto;
    display: block;
  }
  @media (max-width: 420px) {
    margin: 0 20px;
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
  float: right;
  margin-left: 40px !important;
  max-width: 700px;
  @media (max-width: 1400px) {
    max-width: 700px;
    float: none;
  }
  @media (max-width: 768px) {
    margin: 0 20px !important;
  }
`;

export const MemberEach = styled.li`
  width: 190px;
  float: left;
  list-style: none;
  padding: 8px;
  margin-right: 30px;
  @media (max-width: 768px) {
    width: 177px;
    padding: 15px 3px;
    margin-right: 10px;
  }
  @media (max-width: 420px) {
    margin-bottom: 0px;
    width: 100%;
  }
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
  width: 40px;
  height: 40px;
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
  font-size: 12px;
`;

export const WidgetUserReputation = styled.p`
  font-size: 0.8em;
  font-weight: 300;
  font-family: 'Lato', sans-serif;
  font-size: 9px;
`;

export const WidgetUserReputationScore = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  font-size: 10px;
`;
export const Br = styled.br`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MembersWrapper = styled.div`
  display: block;
  overflow: hidden;
  float: left;
  width: 50%;
  margin-right: 100px;
  @media (max-width: 992px) {
    width: 100%;
    float: none;
    display: block;
    margin: 0 auto 60px;
  }
`;

// @flow
import React from 'react';
//$FlowFixMe
import styled from 'styled-components';

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`;

export const SvgWrapper = styled.div`
  display: inline-block;
`;

const Img = styled.img`
  float: left;
  height: 30px;
`;

const LogoTxt = styled.span`
  margin-top: 7px;
  font-weight: bold;
  display: block;
  overflow: hidden;
`;

export const Logo = () => {
  return (
    <SvgWrapper>
      <Img src="/img/logos/logo-mark.png" alt="Vanila community logo" />
      <LogoTxt>community.vanila</LogoTxt>
    </SvgWrapper>
  );
};

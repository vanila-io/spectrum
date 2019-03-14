// @flow
import theme from 'shared/theme';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UserAvatar } from '../../components/avatar';

import {
  Shadow,
  Gradient,
  FlexCol,
  Transition,
  HorizontalRule,
} from '../../components/globals';
import Search from '../explore/components/search';
import Section from '../../components/themedSection';
import { Conversation, Discover } from '../../components/illustrations';
import {
  AbstractLogo,
  BootstrapLogo,
  ExpoLogo,
  FigmaLogo,
  InvisionLogo,
  ZeitLogo,
  SketchLogo,
  RealmLogo,
  NodeLogo,
} from './components/logos';
import {
  Tagline,
  Copy,
  Bullets,
  Bullet,
  BulletHeading,
  BulletTitle,
  BulletCopy,
  Flexer,
  PrimaryCTA,
  SecondaryCTA,
  Content,
} from './style';
import { track, events } from 'src/helpers/analytics';

type Props = Object;

export const Overview = (props: Props) => {
  const ThisContent = styled(Content)`
    max-width: 100vw;
    padding-top: 0;
    padding-bottom: 80px;
    background: transparent;

    @media (max-width: 768px) {
      margin-bottom: 40px;
      padding-bottom: 0px;
    }
  `;

  const Text = styled(FlexCol)`
    margin: 250px 32px 0 32px;
    text-align: center;
    z-index: 2;
    color: #fff;
    font-family: 'Lato', sans-serif;

    @media (max-width: 768px) {
      margin-top: 100px;
      margin-bottom: 16px;
      text-align: left;
      align-items: left;
    }
  `;

  const ThisCopy = styled(Copy)`
    line-height: 1.6;
    color: #fff;
    max-width: 100%;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 28px;
    margin: 0 auto;
    @media (max-width: 1400px) {
      font-size: 22px;
    }
    @media (max-width: 768px) {
      -webkit-align-items: left;
      -webkit-box-align: left;
      -ms-flex-align: left;
      align-items: left;
      text-align: left;
      font-size: 18px;
    }
  `;

  const ThisTagline = styled(Tagline)`
    margin-bottom: 16px;
    font-size: 50px;
    font-family: 'Lato', sans-serif;

    font-weight: 300;

    @media (max-width: 1200px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 26px;

      -webkit-align-items: left;
      -webkit-box-align: left;
      -ms-flex-align: left;
      align-items: left;
      text-align: left;
    }
  `;

  const Actions = styled(Flexer)`
    margin-top: 48px;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 768px) {
      align-items: left;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      justify-content: left;
    }
  `;

  const ThisSecondaryCTA = styled(SecondaryCTA)`
    margin-left: 16px;
    font-size: 24px;
    font-weight: normal;
    border: 1px solid #fff;
    font-family: 'Lato', sans-serif;
    @media (max-width: 768px) {
      padding: 8px;
      font-size: 18px;
      margin-left: 10px;
    }
  `;

  const ThisText = styled(Text)`
    position: relative;
    font-family: 'Lato', sans-serif;
    @media (max-width: 1400px) {
    }

    @media (max-width: 1200px) {
    }
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    font-size: 24px;
    font-weight: normal;
    background: #3d57ff;
    border: 1px solid #3d57ff;
    border-radius: 9px;
    color: #fff;
    font-family: 'Lato', sans-serif;
    @media (max-width: 768px) {
      padding: 8px;
      font-size: 18px;
    }
  `;

  const Img = styled.img`
    max-width: 1350px;
    padding-bottom: 200px;

    @media (max-width: 1400px) {
      max-width: 80%;
    }

    @media (max-width: 1200px) {
    }

    @media (max-width: 768px) {
      display: none;
    }
  `;

  const BoldText = styled.span`
    font-weight: 900;
    font-family: 'Lato', sans-serif;
  `;

  const ThisWrapper = styled.div`
    max-width: 100vw;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    -webkit-align-self: stretch;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    background: #fff;
    background-image: url('/img/mainSectionBg.svg');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 640px) {
      margin-bottom: 40px;
    }
  `;
  const Br = styled.br`
    @media (max-width: 768px) {
      display: none;
    }
  `;
  return (
    <Section>
      <ThisWrapper>
        <ThisContent>
          <ThisText>
            <ThisTagline>
              Hub for <BoldText>Designers</BoldText>, <Br />{' '}
              <BoldText>Makers</BoldText>, <BoldText>Developers</BoldText>,{' '}
              <BoldText>Growth Hackers</BoldText>
            </ThisTagline>
            <ThisCopy>
              The maker culture is a contemporary culture or subculture <Br />
              representing a <BoldText>technology-based</BoldText> extension of{' '}
              <BoldText>DIY culture</BoldText> <Br /> that intersects with
              hacker culture.
            </ThisCopy>

            <Actions>
              <Link
                to="/login"
                onClick={() => track(events.HOME_PAGE_JOIN_SPECTRUM_CLICKED)}
              >
                <ThisPrimaryCTA icon="welcome">Join community</ThisPrimaryCTA>
              </Link>
              <Link to="/explore">
                <ThisSecondaryCTA
                  icon="explore"
                  onClick={() => track(events.HOME_PAGE_EXPLORE_CLICKED)}
                >
                  Explore
                </ThisSecondaryCTA>
              </Link>
            </Actions>
          </ThisText>
        </ThisContent>
        <ThisContent>
          <Img src="img/home-hero.png" alt="Home hero screenshot" />
        </ThisContent>
      </ThisWrapper>
    </Section>
  );
};

export const DiscoverCommunites = (props: Props) => {
  const ThisContent = styled(Content)`
    padding: 100px 0;
    img {
      margin: 24px 0;
    }

    @media (max-width: 992px) {
      display: block !important;
    }
    @media (max-width: 768px) {
      padding: 0;
    }
  `;

  const Text = styled(FlexCol)`
    margin: 40px 100px 200px;
    font-family: 'Lato', sans-serif;
    @media (max-width: 1400px) {
      margin: 0 40px;
    }
    @media (max-width: 768px) {
      margin-top: 0px;
      margin-bottom: 44px;
    }
  `;

  const ThisCopy = styled(Copy)`
    font-weight: 300;
    font-size: 28px;
    margin-top: 16px;
    font-family: 'Lato', sans-serif;
    @media (max-width: 1400px) {
      font-size: 22px;
    }
    @media (max-width: 768px) {
      -webkit-align-items: left;
      -webkit-box-align: left;
      -ms-flex-align: left;
      align-items: left;
      text-align: left;
      font-size: 18px;
    }
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    margin-top: 32px;
    font-size: 20px;
    background: #3d57ff;
    border-radius: 9px;
    color: #fff;
    padding: 20px;
    font-weight: normal;
    font-family: 'Lato', sans-serif;
    @media (max-width: 768px) {
      padding: 8px;
      font-size: 18px;
    }
  `;

  const Actions = styled.div`
    @media (max-width: 768px) {
      display: flex;
      justify-content: start;
    }
  `;

  const ThisTagline = styled(Tagline)`
    font-size: 50px;
    font-weight: 300;
    font-family: 'Lato', sans-serif;
    @media (max-width: 1200px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 26px;
      margin-bottom: 0;
      -webkit-align-items: left;
      -webkit-box-align: left;
      -ms-flex-align: left;
      align-items: left;
      text-align: left;
    }
  `;

  const LogoSection = styled.div`
    display: flex;
    align-self: center;
    max-width: 80vw;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 2;
    margin-bottom: 80px;

    img {
      margin-top: 32px;
      margin-right: 32px;

      &:last-of-type {
        margin-right: 0;
      }
    }
  `;

  const BoldText = styled.span`
    font-weight: bold;
    font-family: 'Lato', sans-serif;
  `;

  const Img = styled.img`
    padding-bottom: 100px;
    max-width: 700px;

    @media (max-width: 1400px) {
      width: 50%;
      margin: 0 40px !important;
    }

    @media (max-width: 1200px) {
    }
    @media (max-width: 992px) {
      display: none;
    }
    @media (max-width: 768px) {
      display: block;
      width: 80%;
      max-width: 80%;
      margin: 0 40px !important;
      padding-bottom: 60px;
    }
  `;

  const ImgHideForDesktop = styled.img`
    max-width: 1350px;
    padding-bottom: 200px;
    display: none;
    @media (max-width: 1400px) {
      max-width: 80%;
    }

    @media (max-width: 992px) {
      display: block;
      margin: 40px auto !important;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `;

  const Br = styled.br`
    @media (max-width: 768px) {
      display: none;
    }
  `;
  return (
    <Section>
      <ThisContent>
        <Img src="/img/home2.png" alt="Discover communities screenshot" />
        <Text>
          <ThisTagline>
            Discover <BoldText>Communities</BoldText>
          </ThisTagline>
          <ThisCopy>
            Every community is built to cover specific skills or group of <Br />
            people. Be part of communities that fits your skills or If you{' '}
            <Br /> don't find yours community, go and{' '}
            <BoldText>build one</BoldText>.
          </ThisCopy>
          <Actions>
            <Link to="/explore">
              <ThisPrimaryCTA
                onClick={() => track(events.HOME_PAGE_EXPLORE_CLICKED)}
              >
                Explore communities
              </ThisPrimaryCTA>
            </Link>
          </Actions>
        </Text>
        <ImgHideForDesktop
          src="/img/home2.png"
          alt="Discover communities screenshot"
        />
      </ThisContent>
    </Section>
  );
};

export const SearchThread = (props: Props) => {
  const ThisContent = styled(Content)`
    overflow: hidden;
    padding: 100px 0;
    background: #fff;
    background-image: url('/img/sectionOneBg.svg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 20px;
    padding-top: 300px;
    @media (max-width: 992px) {
      display: block !important;
    }
    @media (max-width: 768px) {
      margin-bottom: 0px;
      padding: 200px 0 40px;
      margin-top: -90px;
    }
  `;

  const ThisCopy = styled(Copy)`
    font-size: 28px;
    margin-top: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    margin-top: 16px;
    color: #fff;
    @media (max-width: 1400px) {
      font-size: 22px;
    }
    @media (max-width: 768px) {
      font-size: 18px;
    }
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    margin-top: 32px;
    font-size: 20px;
    background: #3d57ff;
    border-radius: 9px;
    color: #fff;
    padding: 20px;
    font-weight: normal;
    font-family: 'Lato', sans-serif;
    @media (max-width: 768px) {
      padding: 8px;
      font-size: 18px;
    }
  `;

  const Actions = styled.div`
    @media (max-width: 768px) {
      display: flex;
      justify-content: start;
      font-size: 18px;
    }
  `;

  const ThisTagline = styled(Tagline)`
    font-size: 50px;
    font-weight: 300;
    color: #fff;
    font-family: 'Lato', sans-serif;
    @media (max-width: 1200px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      margin-bottom: 0;
      font-size: 26px;
    }
  `;

  const BoldText = styled.span`
    font-weight: bold;
    font-family: 'Lato', sans-serif;
  `;
  const Text = styled(FlexCol)`
    margin-left: 100px;
    font-family: 'Lato', sans-serif;
    @media (max-width: 1400px) {
      margin: 0 40px;
    }
  `;

  const Img = styled.img`
    padding-bottom: 100px;
    max-width: 700px;

    @media (max-width: 1400px) {
      margin: 0 40px !important;
      width: 50%;
    }

    @media (max-width: 992px) {
      margin: 0 auto !important;
      display: block;
    }

    @media (max-width: 768px) {
      width: 80%;
      max-width: 80%;
      padding-bottom: 60px;
    }
  `;
  const Br = styled.br`
    @media (max-width: 768px) {
      display: none;
    }
  `;
  return (
    <Section>
      <ThisContent>
        <Img src="/img/home3.png" alt="Gain reputation screenshot" />
        <Text>
          <ThisTagline>
            All your <BoldText>communities</BoldText> in one place
          </ThisTagline>
          <ThisCopy>
            Compact design give you ability to have all your communities <Br />
            and threads in <BoldText>one place</BoldText>.
          </ThisCopy>
          <ThisCopy>
            Conversations are threaded and easy searchable
            <BoldText>
              {' '}
              Algolia <Br />
              search
            </BoldText>{' '}
            power.
          </ThisCopy>
          <Actions>
            <Link to="/explore">
              <ThisPrimaryCTA
                onClick={() => track(events.HOME_PAGE_EXPLORE_CLICKED)}
              >
                Create your first thread
              </ThisPrimaryCTA>
            </Link>
          </Actions>
        </Text>
      </ThisContent>
    </Section>
  );
};

export const PublicProfile = (props: Props) => {
  const ThisContent = styled(Content)`
    overflow: hidden;
    margin-bottom: 120px;
    @media (max-width: 992px) {
      display: block !important;
    }
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  `;

  const ThisCopy = styled(Copy)`
    font-weight: 300;
    margin-top: 16px;
    font-size: 28px;
    font-family: 'Lato', sans-serif;
    @media (max-width: 1400px) {
      font-size: 22px;
    }
    @media (max-width: 768px) {
      font-size: 18px;
    }
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    margin-top: 32px;
    font-size: 20px;
    background: #3d57ff;
    border-radius: 9px;
    color: #fff;
    padding: 20px;
    font-weight: normal;
    font-family: 'Lato', sans-serif;
    @media (max-width: 768px) {
      font-size: 18px;
      padding: 8px;
    }
  `;

  const Actions = styled.div`
    @media (max-width: 768px) {
      display: flex;
      justify-content: start;
      font-size: 18px;
    }
  `;

  const ThisTagline = styled(Tagline)`
    font-size: 50px;
    font-weight: 300;
    margin-top: -130px;
    font-family: 'Lato', sans-serif;
    @media (max-width: 1200px) {
      font-size: 40px;
      margin-top: 0px;
    }
    @media (max-width: 768px) {
      margin-bottom: 0;
      font-size: 26px;
    }
  `;

  const BoldText = styled.span`
    font-weight: bold;
    font-family: 'Lato', sans-serif;
  `;

  const Text = styled(FlexCol)`
    margin: 0 100px;
    font-family: 'Lato', sans-serif;
    @media (max-width: 1400px) {
      margin: 0 40px;
    }
  `;

  const ThisWrapper = styled.div`
    max-width: 100vw;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    -webkit-align-self: stretch;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    background: transparent;
    background-image: url('/img/sectionTwoBg.svg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 350px;

    @media (max-width: 768px) {
      padding-top: 0;
    }
  `;
  const Img = styled.img`
    padding-bottom: 100px;
    max-width: 700px;

    @media (max-width: 1400px) {
      width: 50%;
    }

    @media (max-width: 1200px) {
    }

    @media (max-width: 992px) {
      margin: 0 auto;
      display: block;
    }

    @media (max-width: 768px) {
      width: 80%;
      max-width: 80%;
      margin-top: 60px;
      padding-bottom: 60px;
    }
  `;

  const ImgHideForMob = styled.img`
    padding-bottom: 100px;
    max-width: 700px;
    @media (max-width: 1400px) {
      max-width: 80%;
    }

    @media (max-width: 992px) {
      display: none;
    }
    @media (max-width: 768px) {
    }
  `;

  const ImgHideForDesktop = styled.img`
    max-width: 1350px;
    display: none;
    @media (max-width: 1400px) {
      max-width: 80%;
    }

    @media (max-width: 992px) {
      display: block;
      margin: 40px auto;
    }
    @media (max-width: 768px) {
      width: auto;
      max-width: 80%;
    }
  `;
  const Br = styled.br`
    @media (max-width: 768px) {
      display: none;
    }
  `;
  return (
    <Section goop={0} background={'reverse'}>
      <ThisWrapper>
        <ThisContent>
          <Img src="/img/home4.png" alt="Public profiles screenshot" />
          <Text>
            <ThisTagline>
              Public <BoldText>Profiles</BoldText> Showing <Br />{' '}
              <BoldText>Contribution</BoldText>
            </ThisTagline>
            <ThisCopy>The internet was built for communities.</ThisCopy>
            <ThisCopy>
              But, as the web has changed and improved radically, <Br />{' '}
              community software has hardly improved since the heyday of <Br />{' '}
              messageboards and IRC.
            </ThisCopy>
            <Actions>
              <Link to="/explore">
                <ThisPrimaryCTA
                  onClick={() => track(events.HOME_PAGE_EXPLORE_CLICKED)}
                >
                  Create your profile
                </ThisPrimaryCTA>
              </Link>
            </Actions>
          </Text>
        </ThisContent>
        <ThisContent>
          <ImgHideForDesktop
            src="/img/home5.png"
            alt="Mobile Friendly - PWA screenshot"
          />
          <Text>
            <ThisTagline>
              It's Mobile Friendly (PWA), <Br />
              <BoldText>Native Apps Coming Soon</BoldText>
            </ThisTagline>
            <ThisCopy>The internet was built for communities.</ThisCopy>
            <ThisCopy>
              But, as the web has changed and improved radically, <Br />{' '}
              community software has hardly improved since the heyday of <Br />{' '}
              messageboards and IRC.
            </ThisCopy>
          </Text>
          <ImgHideForMob
            src="/img/home5.png"
            alt="Mobile Friendly - PWA screenshot"
          />
        </ThisContent>
      </ThisWrapper>
    </Section>
  );
};

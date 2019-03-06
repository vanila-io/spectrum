// @flow
import theme from 'shared/theme';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../../components/icons';
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
  const ThisWrapper = styled(Content)`
    background: #fff;
    background-image: url('/img/mainSectionBg.svg');
    @media (max-width: 640px) {
      margin-bottom: 40px;
    }
  `;
  const ThisContent = styled(Content)`
    max-width: 100vw;
    padding-top: 92px;
    padding-bottom: 80px;
    background: #000;
    @media (max-width: 640px) {
      margin-bottom: 40px;
    }
  `;

  const Text = styled(FlexCol)`
    margin: 120px 32px 0 32px;
    text-align: center;
    z-index: 2;
    color: #fff;
    @media (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 16px;
      text-align: center;
      align-items: center;
    }
  `;

  const ThisCopy = styled(Copy)`
    line-height: 1.6;
    color: #fff;
    max-width: 500px;
    margin: 0 auto;
    @media (max-width: 768px) {
      text-align: center;
    }
  `;

  const ThisTagline = styled(Tagline)`
    margin-bottom: 16px;
    font-size: 50px;
    font-weight: normal;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  `;

  const Actions = styled(Flexer)`
    margin-top: 48px;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 768px) {
      align-items: center;
    }
  `;

  const ThisSecondaryCTA = styled(SecondaryCTA)`
    margin-left: 16px;
    font-size: 16px;
    border: 2px solid #fff;

    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 16px;
    }
  `;

  const ThisText = styled(Text)`
    position: relative;

    @media (max-width: 1400px) {
      right: 15vw;
    }

    @media (max-width: 1200px) {
      right: 0;
    }
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    font-size: 16px;
    background: #3d57ff;
    border-radius: 9px;
    color: #fff;
  `;

  const Img = styled.img`
    max-width: 1350px;
    padding-bottom: 100px;

    @media (max-width: 1400px) {
      left: calc(20vw + 480px);
    }

    @media (max-width: 1200px) {
      display: none;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `;

  /* custom */

  const BoldText = styled.span`
    font-weight: bold;
  `;

  return (
    <Section goop={2}>
      <ThisContent>
        <ThisText>
          <ThisTagline>
            Hub for <BoldText>Designers</BoldText>, <br />{' '}
            <BoldText>Makers</BoldText>, <BoldText>Developers</BoldText>,{' '}
            <BoldText>Growth Hackers</BoldText>
          </ThisTagline>
          <ThisCopy>
            The maker culture is a contemporary culture or subculture
            representing a <BoldText>technology-based</BoldText> extension of{' '}
            <BoldText>DIY culture</BoldText> that intersects with hacker
            culture.
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
            {/* <Link
              to="/new/community"
              onClick={() => track(events.HOME_PAGE_CREATE_COMMUNITY_CLICKED)}
            >
              <ThisSecondaryCTA icon="plus-fill">
                Create your community
              </ThisSecondaryCTA>
            </Link> */}
          </Actions>
        </ThisText>
      </ThisContent>
      <ThisContent>
        <Img src="img/home-hero.png" alt="" />
      </ThisContent>
    </Section>
  );
};

export const DiscoverCommunites = (props: Props) => {
  const ThisContent = styled(Content)`
    img {
      margin: 24px 0;
    }
  `;

  const Text = styled(FlexCol)`
    margin: 40px 100px 200px;

    @media (max-width: 768px) {
      margin-top: 20px;
      margin-bottom: 44px;
    }
  `;

  const ThisCopy = styled(Copy)`
    font-weight: 400;
    margin-top: 16px;
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    margin-top: 32px;
    font-size: 20px;
    background: #3d57ff;
    border-radius: 9px;
    color: #fff;
    padding: 20px;
    font-weight: normal;
  `;

  const Actions = styled.div`
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  `;

  const ThisTagline = styled(Tagline)`
    font-size: 50px;
    font-weight: normal;
    @media (max-width: 768px) {
      margin-bottom: 0;
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
  `;

  const Img = styled.img`
    padding-bottom: 100px;

    @media (max-width: 1400px) {
      left: calc(20vw + 480px);
    }

    @media (max-width: 1200px) {
      display: none;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `;

  return (
    <Section goop={2}>
      <ThisContent>
        <Img src="/img/home2.png" alt="Discover communities screenshot" />
        <Text>
          <ThisTagline>
            Discover <BoldText>Communities</BoldText>
          </ThisTagline>
          <ThisCopy>
            Every community is built to cover specific skills or group of
            people. Be part of communities that fits your skills or If you don't
            find yours community, go and <BoldText>build one</BoldText>.
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
      </ThisContent>
    </Section>
  );
};

export const SearchThread = (props: Props) => {
  const ThisContent = styled(Content)`
    overflow: hidden;
    padding: 100px 0;
    background: #151419;
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  `;

  const ThisCopy = styled(Copy)`
    font-weight: 400;
    margin-top: 16px;
    color: #fff;
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    margin-top: 32px;
    font-size: 20px;
    background: #3d57ff;
    border-radius: 9px;
    color: #fff;
    padding: 20px;
    font-weight: normal;
  `;

  const Actions = styled.div`
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  `;

  const ThisTagline = styled(Tagline)`
    font-size: 50px;
    font-weight: normal;
    color: #fff;
    @media (max-width: 768px) {
      margin-bottom: 0;
    }
  `;

  const BoldText = styled.span`
    font-weight: bold;
  `;
  const Text = styled(FlexCol)`
    margin-left: 100px;
  `;
  return (
    <Section>
      <ThisContent>
        <img src="/img/home3.png" alt="Gain reputation screenshot" />
        <Text>
          <ThisTagline>
            All your <BoldText>communities</BoldText> in one place
          </ThisTagline>
          <ThisCopy>
            Compact design give you ability to have all your communities and
            threads in <BoldText>one place</BoldText>.
          </ThisCopy>
          <ThisCopy>
            Conversations are threaded and easy searchable using{' '}
            <BoldText>Algolia search</BoldText> power.
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

export const ReputationSystem = (props: Props) => {
  const ThisContent = styled(Content)`
    overflow: hidden;
    background-color: #fff;
    padding: 100px 0;
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  `;

  const ThisCopy = styled(Copy)`
    font-weight: 400;
    margin-top: 16px;
    color: #000000;
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    margin-top: 32px;
    font-size: 20px;
    background: #3d57ff;
    border-radius: 9px;
    color: #fff;
    padding: 20px;
    font-weight: normal;
  `;

  const Actions = styled.div`
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  `;

  const ThisTagline = styled(Tagline)`
    font-size: 50px;
    font-weight: normal;
    color: #000000;

    @media (max-width: 768px) {
      margin-bottom: 0;
    }
  `;

  const BoldText = styled.span`
    font-weight: bold;
  `;

  const Text = styled(FlexCol)`
    margin-left: 100px;
  `;
  return (
    <Section goop={0} background={'reverse'}>
      <ThisContent>
        <Text>
          <ThisTagline>
            <BoldText>Reputation</BoldText> System
          </ThisTagline>
          <ThisCopy>
            You gain reputations each time you create, respond or give a like to
            thread.
          </ThisCopy>
          <ThisCopy>
            Reputation gives you sense of how active is some member in overall
            Vanila Community or specific one.
          </ThisCopy>
        </Text>
      </ThisContent>
    </Section>
  );
};

export const PublicProfile = (props: Props) => {
  const ThisContent = styled(Content)`
    overflow: hidden;
    margin: 40px 16px 80px;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  `;

  const ThisCopy = styled(Copy)`
    font-weight: 400;
    margin-top: 16px;
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    margin-top: 32px;
    font-size: 20px;
    background: #3d57ff;
    border-radius: 9px;
    color: #fff;
    padding: 20px;
    font-weight: normal;
  `;

  const Actions = styled.div`
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  `;

  const ThisTagline = styled(Tagline)`
    font-size: 50px;
    font-weight: normal;
    margin-top: -130px;

    @media (max-width: 768px) {
      margin-bottom: 0;
    }
  `;

  const BoldText = styled.span`
    font-weight: bold;
  `;

  const Text = styled(FlexCol)`
    margin-left: 100px;
  `;
  return (
    <Section goop={0} background={'reverse'}>
      <ThisContent>
        <img src="/img/home4.png" alt="" />
        <Text>
          <ThisTagline>
            Public <BoldText>Profiles</BoldText> Showing <br />{' '}
            <BoldText>Contribution</BoldText>
          </ThisTagline>
          <ThisCopy>The internet was built for communities.</ThisCopy>
          <ThisCopy>
            But, as the web has changed and improved radically, community
            software has hardly improved since the heyday of messageboards and
            IRC.
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
    </Section>
  );
};

export const PWA = (props: Props) => {
  const ThisContent = styled(Content)`
    overflow: hidden;
    margin: 40px 16px 80px;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  `;

  const ThisCopy = styled(Copy)`
    font-weight: 400;
    margin-top: 16px;
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    background-color: ${theme.brand.alt};
    background-image: ${props =>
      Gradient(props.theme.brand.alt, props.theme.brand.default)};
    color: ${theme.text.reverse};
    margin-top: 32px;

    &:hover {
      color: ${theme.text.reverse};
    }
  `;

  const Actions = styled.div`
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  `;

  const ThisTagline = styled(Tagline)`
    font-size: 50px;
    font-weight: normal;
    @media (max-width: 768px) {
      margin-bottom: 0;
    }
  `;

  const BoldText = styled.span`
    font-weight: bold;
  `;

  const Text = styled(FlexCol)`
    margin-right: 100px;
  `;
  return (
    <Section goop={0} background={'reverse'}>
      <ThisContent>
        <Text>
          <ThisTagline>
            It's Mobile Friendly (PWA), <br />
            <BoldText>Native Apps Coming Soon</BoldText>
          </ThisTagline>
          <ThisCopy>The internet was built for communities.</ThisCopy>
          <ThisCopy>
            But, as the web has changed and improved radically, community
            software has hardly improved since the heyday of messageboards and
            IRC.
          </ThisCopy>
        </Text>
        <img src="/img/home5.png" alt="" />
      </ThisContent>
    </Section>
  );
};

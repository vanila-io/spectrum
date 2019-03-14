// @flow
import * as React from 'react';
import {
  Footer,
  FooterGrid,
  Masthead,
  Support,
  Apps,
  Safety,
  SocialLinks,
  FooterText,
} from '../style';
import { Link } from 'react-router-dom';
import { IconButton } from 'src/components/buttons';
import { Logo } from 'src/components/logo';

import { track, events } from 'src/helpers/analytics';

export default () => {
  return (
    <Footer>
      <FooterGrid>
        <Masthead>
          <Link to="/">
            <Logo />
          </Link>
          <FooterText>
            Hub for developers, designers, growth hackers, one word makers
          </FooterText>
          <FooterText>© Copyright 2019 Vanila.io</FooterText>
          <SocialLinks>
            <a
              href="https://github.com/vanila-io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton glyph="github" hoverColor={'text.reverse'} />
            </a>
            <a
              href="https://twitter.com/vanila_io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton glyph="twitter" hoverColor={'text.reverse'} />
            </a>
          </SocialLinks>
        </Masthead>
        <Apps>
          <span>Apps</span>
          <Link to={`/apps`}>Mac</Link>
        </Apps>
        <Support>
          <span>Support</span>
          <Link to={`/vanila`}>Community</Link>
          <Link to={`/vanila/hugs-n-bugs`}>Bug reports</Link>
          <Link to={`/vanila/feature-requests`}>Feature requests</Link>
          <a href="mailto:community@vanila.io">Email support</a>
        </Support>
        <Safety>
          <span>Safety</span>
          <a
            href="https://github.com/vanila-io/code-of-conduct"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track(events.CODE_OF_CONDUCT_CLICKED, {
                location: 'splash page footer',
              })
            }
          >
            Code of Conduct
          </a>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </Safety>
      </FooterGrid>
    </Footer>
  );
};

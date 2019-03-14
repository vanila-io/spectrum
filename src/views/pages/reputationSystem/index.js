// @flow
import * as React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withCurrentUser } from 'src/components/withCurrentUser';
import Section from '../../../components/themedSection';

import {
  WidgetWrapper,
  WidgetAvatar,
  WidgetInfo,
  WidgetUserName,
  WidgetUserReputation,
  WidgetUserReputationScore,
  MembersList,
  MemberEach,
  Text,
  ThisTagline,
  BoldText,
  ThisContent,
  ThisCopy,
  Br,
  MembersWrapper,
} from './style';

class ReputationSystem extends React.Component {
  constructor() {
    super();
    this.state = { communityData: [], memberEdges: [] };
  }

  async componentDidMount() {
    const communityData = await this.getData();
    try {
      // show members data from only first community, which is "vanila"
      const memberEdges = communityData[0].members.edges;
      this.setState({ communityData, memberEdges });
    } catch (e) {
      console.log('Reputation data not loaded');
    }
  }

  async getData() {
    if (process.env.NODE_ENV === 'production') {
      const data = {
        operationName: 'getCommunitiesBySlugs',
        variables: {
          slugs: [
            'vanila',
            'uiux',
            'frontend-hub',
            'growth-hackers',
            'javascript',
            'startup-space',
            'wekan',
            'uxstore',
            'wireflow',
            'moonly',
          ],
        },
        query: `
        query getCommunitiesBySlugs($slugs: [LowercaseString]) {
          communities(slugs: $slugs) {
            ...communityInfo
            __typename
          }
        }
        
        fragment communityInfo on Community {
          id
          createdAt
          name
          slug
          description
          website
          profilePhoto
          coverPhoto
          pinnedThreadId
          watercoolerId
          isPrivate
          metaData {
            members
            channels
            onlineMembers
          }
          members {
            edges {
              node {
                user {
                  username
                  totalReputation
                  isOnline
                }
                reputation
              }
            }
          }
        }
        `,
      };

      return fetch(`https://${REACT_APP_PROD_DOMAIN}/api`, {
        credentials: 'include',
        headers: {
          accept: '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
        },
        referrer: `https://${REACT_APP_PROD_DOMAIN}/explore`,
        referrerPolicy: 'no-referrer-when-downgrade',
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
      });
    }

    // we use a dummy data for local development
    return fetch(
      'https://gist.githubusercontent.com/entrptaher/4a62b93e59170e880691eae9723fb299/raw/d48d621fa5f8c8c454d8a49ec623b3217d848f1a/sample-data.json'
    )
      .then(data => data.json())
      .then(data => data.data.communities);
  }

  getMembers() {
    const { communityData, memberEdges } = this.state;
    if (!memberEdges.length) return '';

    return memberEdges.slice(0, 9).map(member => {
      return (
        <MemberEach key={member.node.user.username}>
          <WidgetWrapper>
            <WidgetAvatar
              src={member.node.user.profilePhoto}
              alt={member.node.user.username}
            />
            <WidgetInfo>
              <WidgetUserName>{member.node.user.username}</WidgetUserName>
              <WidgetUserReputation>Reputation</WidgetUserReputation>
              <WidgetUserReputationScore>
                {member.node.reputation}
              </WidgetUserReputationScore>
            </WidgetInfo>
          </WidgetWrapper>
        </MemberEach>
      );
    });
  }
  render() {
    return (
      <Section>
        <ThisContent>
          <MembersWrapper>
            <MembersList>{this.getMembers()}</MembersList>
          </MembersWrapper>
          <Text>
            <ThisTagline>
              <BoldText>Reputation</BoldText> System
            </ThisTagline>
            <ThisCopy>
              You gain reputations each time you create, respond or give a{' '}
              <Br /> like to thread.
            </ThisCopy>
            <ThisCopy>
              Reputation gives you sense of how active is some member in <Br />{' '}
              overall Vanila Community or specific one.
            </ThisCopy>
          </Text>
        </ThisContent>
      </Section>
    );
  }
}

export default compose(
  withCurrentUser,
  connect()
)(ReputationSystem);

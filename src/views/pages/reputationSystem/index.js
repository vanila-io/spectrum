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
} from './style';

class ReputationSystem extends React.Component {
  constructor() {
    super();
    this.state = { communityData: [] };
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({
        communityData: data,
      });
    });
  }

  async getData() {
    return fetch(
      'https://gist.githubusercontent.com/entrptaher/4a62b93e59170e880691eae9723fb299/raw/d48d621fa5f8c8c454d8a49ec623b3217d848f1a/sample-data.json'
    )
      .then(data => data.json())
      .then(data => this.setState({ communityData: data }));
  }

  render() {
    return (
      <Section>
        <ThisContent>
          <MembersList>
            {communityInfo.map(member => {
              return (
                <MemberEach key={member.node.reputation}>
                  <WidgetWrapper>
                    <WidgetAvatar
                      src={member.node.user.profilePhoto}
                      alt={member.node.user.username}
                    />
                    <WidgetInfo>
                      <WidgetUserName>
                        {member.node.user.username}
                      </WidgetUserName>
                      <WidgetUserReputation>Reputation</WidgetUserReputation>
                      <WidgetUserReputationScore>
                        {member.node.reputation}
                      </WidgetUserReputationScore>
                    </WidgetInfo>
                  </WidgetWrapper>
                </MemberEach>
              );
            })}
          </MembersList>
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

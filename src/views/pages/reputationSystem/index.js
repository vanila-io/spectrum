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
} from './style';

import myData from '../../../sample-data.json';

class ReputationSystem extends React.Component<Props, State> {
  state = {
    communityData: myData,
  };

  render() {
    const communityInfo = this.state.communityData.data.communities[0].members
      .edges;
    console.log(communityInfo);

    return (
      <Section>
        <ThisContent>
          <MembersList>
            {communityInfo.map(member => {
              return (
                <MemberEach key={member.node.reputation}>
                  <WidgetWrapper>
                    <WidgetAvatar src="img/logos/logo-mark.png" alt="" />
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
              <br /> like to thread.
            </ThisCopy>
            <ThisCopy>
              Reputation gives you sense of how active is some member in <br />{' '}
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

// @flow
import { getUserById } from 'shared/db/queries/user';
import { events } from 'shared/analytics';
import { trackQueue } from 'shared/bull/queues';
import type { ToType } from './send-email';

type Props = {
  to: Array<ToType>,
  userId?: string,
};

const VANILA_BLACKLIST = [
  // list of domains from sendgrid spambox and error list
  '@live.ca',
  '@live.com',
  '@hotmail.com',
  '@qq.com',

  // list of emails used on migration scripts
  // Spectrum staff complained about daily digest
  'contact@mxstbr.com',
  'briandlovin@gmail.com',
  'hi@bryn.io',
  'hi@quietuser.com',
  'hi@blockeduser.com',
  'hi@previousboy.io',
  'hi@channelmoderatorboy.io',
  'hi@communitymoderatorboy.io',
  'hi@singlecommunity.io',
];

export const userCanReceiveEmail = async ({ to, userId }: Props) => {
  if (!to) {
    if (userId) {
      trackQueue.add({
        userId: userId,
        event: events.EMAIL_BOUNCED,
        properties: { error: 'To field was not provided' },
      });
    }

    return false;
  }

  to = to.filter(toType => {
    return !VANILA_BLACKLIST.includes(toType.email);
  });

  if (!userId) return false;
  if (!to || to.length === 0) return false;

  const user = await getUserById(userId);
  if (!user || user.bannedAt || user.deletedAt || !user.email) return false;

  return true;
};

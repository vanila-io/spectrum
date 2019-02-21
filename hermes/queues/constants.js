// @flow
const IS_PROD = !process.env.FORCE_DEV && process.env.NODE_ENV === 'production';

export const SEND_NEW_MESSAGE_EMAIL = 'send new message email';
export const SEND_NEW_DIRECT_MESSAGE_EMAIL = 'send new direct message email';
export const SEND_COMMUNITY_INVITE_EMAIL = 'send community invite email';
export const SEND_NEW_USER_WELCOME_EMAIL = 'send new user welcome email';
export const SEND_NEW_COMMUNITY_WELCOME_EMAIL =
  'send new community welcome email';

export const SEND_THREAD_CREATED_NOTIFICATION_EMAIL =
  'send thread created notification email';
export const SEND_DIGEST_EMAIL = 'send digest email';
export const SEND_EMAIL_VALIDATION_EMAIL = 'send email validation email';
export const SEND_ADMINISTRATOR_EMAIL_VALIDATION_EMAIL =
  'send administrator email validation email';
export const SEND_ADMIN_COMMUNITY_CREATED_EMAIL = 'admin community created';
export const SEND_NEW_MENTION_THREAD_EMAIL = 'send thread mention email';
export const SEND_NEW_MENTION_MESSAGE_EMAIL = 'send message mention email';
export const SEND_ADMIN_TOXIC_MESSAGE_EMAIL = 'admin toxic content email';
export const SEND_ADMIN_SLACK_IMPORT_PROCESSED_EMAIL =
  'admin slack import processed email';
export const SEND_ACTIVE_COMMUNITY_ADMIN_REPORT_EMAIL =
  'send active community admin report email';
export const SEND_PRIVATE_CHANNEL_REQUEST_SENT_EMAIL =
  'send request join private channel email';
export const SEND_PRIVATE_CHANNEL_REQUEST_APPROVED_EMAIL =
  'send private channel request approved email';
export const SEND_PRIVATE_COMMUNITY_REQUEST_SENT_EMAIL =
  'send request join private community email';
export const SEND_PRIVATE_COMMUNITY_REQUEST_APPROVED_EMAIL =
  'send private community request approved email';
export const SEND_ADMIN_USER_SPAMMING_THREADS_NOTIFICATION_EMAIL =
  'send admin user spamming threads notification email';
export const SEND_ADMIN_USER_REPORTED_EMAIL = 'send admin user reported email';
export const SENDGRID_WEBHOOK_EVENT = 'process sendgrid webhook event';

export const NEW_MESSAGE_TEMPLATE = IS_PROD
  ? 'd-f15036fd5a9f4cf897ac31b324d6b583'
  : 'd-f15036fd5a9f4cf897ac31b324d6b583';
export const NEW_MENTION_THREAD_TEMPLATE = IS_PROD
  ? 'd-ad36bf63f0e447ae8ae2681f5eb14418'
  : 'd-ad36bf63f0e447ae8ae2681f5eb14418';
export const NEW_MENTION_MESSAGE_TEMPLATE = IS_PROD
  ? 'd-798f75bcfc424ea797aeecf1bf788879'
  : 'd-798f75bcfc424ea797aeecf1bf788879';
export const NEW_DIRECT_MESSAGE_TEMPLATE = IS_PROD
  ? 'd-f2e518b1bf4347478bfe62bebcdcb85f'
  : 'd-f2e518b1bf4347478bfe62bebcdcb85f';
export const NEW_USER_WELCOME_TEMPLATE = IS_PROD
  ? 'd-584544303d44469081181d96e66146a9'
  : 'd-584544303d44469081181d96e66146a9';
export const COMMUNITY_INVITE_TEMPLATE = IS_PROD
  ? 'd-5d52175477b74997b2ae229a51f92dce'
  : 'd-5d52175477b74997b2ae229a51f92dce';
export const NEW_COMMUNITY_WELCOME_TEMPLATE = IS_PROD
  ? 'd-14d97a348c4445fd8d58fac72ab9c48c'
  : 'd-14d97a348c4445fd8d58fac72ab9c48c';

export const NEW_THREAD_CREATED_TEMPLATE = IS_PROD
  ? 'd-9d3821120b054f83a6772db2091ce718'
  : 'd-9d3821120b054f83a6772db2091ce718';
export const DIGEST_TEMPLATE = IS_PROD
  ? 'd-78ae950412844f049c9a52cf753b7927'
  : 'd-78ae950412844f049c9a52cf753b7927';
export const EMAIL_VALIDATION_TEMPLATE = IS_PROD
  ? 'd-33485113347d4cda9da79df518a39efd'
  : 'd-33485113347d4cda9da79df518a39efd';
export const ADMINISTRATOR_EMAIL_VALIDATION_TEMPLATE = IS_PROD
  ? 'd-fcac6746dfab4f86b4bc2431d175df4b'
  : 'd-fcac6746dfab4f86b4bc2431d175df4b';

export const ADMIN_COMMUNITY_CREATED_TEMPLATE =
  'd-a7087be1226d4ea88aa9a48db1e286fd';
export const ADMIN_TOXIC_MESSAGE_TEMPLATE =
  'd-5cb8a34555d0497c8093dbace5a1f0d1';
export const ADMIN_SLACK_IMPORT_PROCESSED_TEMPLATE =
  'd-80e4bcfafff548dc9f4bbe4453b393de';
export const ADMIN_ACTIVE_COMMUNITY_REPORT_TEMPLATE =
  'd-f8458ee08cb54001aa530f6a5d4874a7';
export const ADMIN_USER_SPAMMING_THREADS_NOTIFICATION_TEMPLATE =
  'd-51bb58e9db4840a9a4815c33af861123';
export const ADMIN_USER_REPORTED_TEMPLATE =
  'd-2610f4efe7cc435486f91eaaea2de9bc';

export const PRIVATE_CHANNEL_REQUEST_SENT_TEMPLATE = IS_PROD
  ? 'd-1d863d2d96844fd49fae8429f09c3ee6'
  : 'd-1d863d2d96844fd49fae8429f09c3ee6';
export const PRIVATE_CHANNEL_REQUEST_APPROVED_TEMPLATE = IS_PROD
  ? 'd-42f319a0d18c474c8e7cdb6ad01304f0'
  : 'd-42f319a0d18c474c8e7cdb6ad01304f0';

export const PRIVATE_COMMUNITY_REQUEST_SENT_TEMPLATE = IS_PROD
  ? 'd-025124979b234781abcfb188bed745b6'
  : 'd-025124979b234781abcfb188bed745b6';
export const PRIVATE_COMMUNITY_REQUEST_APPROVED_TEMPLATE = IS_PROD
  ? 'd-7f4e67e918d14e73962249825b1faf1a'
  : 'd-7f4e67e918d14e73962249825b1faf1a';

// types used to generate unsubscribe tokens
export const TYPE_DAILY_DIGEST = 'dailyDigest';
export const TYPE_WEEKLY_DIGEST = 'weeklyDigest';
export const TYPE_NEW_THREAD_CREATED = 'newThreadCreated';
export const TYPE_NEW_MESSAGE_IN_THREAD = 'newMessageInThreads';
export const TYPE_NEW_DIRECT_MESSAGE = 'newDirectMessage';
export const TYPE_NEW_MENTION = 'newMention';
export const TYPE_MUTE_CHANNEL = 'muteChannel';
export const TYPE_MUTE_COMMUNITY = 'muteCommunity';
export const TYPE_MUTE_THREAD = 'muteThread';
export const TYPE_MUTE_DIRECT_MESSAGE_THREAD = 'muteDirectMessageThread';

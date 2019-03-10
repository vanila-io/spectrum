// @flow
require('now-env');
const fetch = require('isomorphic-fetch');
const { SENDGRID_API_KEY } = process.env;
const processArgs = process.argv.slice(2);
const TO = processArgs.find(arg => arg.indexOf('@') > 0);
const sg = require('@sendgrid/mail');

if (!TO) {
  console.error('❌ Be sure to provide a valid email');
  return;
}

if (!SENDGRID_API_KEY) {
  console.error('❌ Be sure to provide a SendGrid API key');
  return;
}

sg.setApiKey(SENDGRID_API_KEY);

const sendEmail = (templateId, dynamic_template_data) => {
  return sg.send({
    from: {
      email: 'community@vanila.io',
      name: 'Vanila Community',
    },
    tracking_settings: {
      click_tracking: {
        enable: false,
      },
    },
    templateId,
    to: TO,
    dynamic_template_data,
  });
};

const init = () => {
  const templates = [
    {
      filename: 'mention-in-thread',
      id: 'd-ad36bf63f0e447ae8ae2681f5eb14418',
    },
    {
      filename: 'mention-in-message',
      id: 'd-798f75bcfc424ea797aeecf1bf788879',
    },
    {
      filename: 'direct-message-received',
      id: 'd-3e289af9efe748308be2dde1d3786c0d',
    },
    {
      filename: 'new-user-welcome',
      id: 'd-584544303d44469081181d96e66146a9',
    },
    {
      filename: 'community-invitation',
      id: 'd-69b2e17b7a0f46048dcf4083ad4f9c48',
    },
    { filename: 'community-created', id: 'd-dc7b4f048f4c460f9dd368fd3796421b' },
    { filename: 'thread-created', id: 'd-084c11332981443388ebdae05d0a2ff4' },
    { filename: 'digest', id: 'd-5e52250c25be4654af82172970551919' },
    {
      filename: 'user-email-validation',
      id: 'd-9fbb3cc969364050aac891c255d31209',
    },
    {
      filename: 'community-admin-email-validation',
      id: 'd-a60e1df2d5294c73818759be13f09df4',
    },
    {
      filename: 'private-community-request-approved',
      id: 'd-7f4e67e918d14e73962249825b1faf1a',
    },
    {
      filename: 'private-community-request-sent',
      id: '74831f98-5144-4b2a-9f12-fc33f5e01d27',
    },
    {
      filename: 'private-channel-request-approved',
      id: 'd-42f319a0d18c474c8e7cdb6ad01304f0',
    },
    {
      filename: 'private-channel-request-sent',
      id: 'd-1d863d2d96844fd49fae8429f09c3ee6',
    },
    {
      filename: 'admin-user-reported-alert',
      id: 'd-7340d2f62edd4af6a4c95f87a8d4e1c6',
    },
    {
      filename: 'admin-user-spamming-threads-alert',
      id: 'd-65de04a810d84af7b76a57f7b4b6ebbe',
    },
    {
      filename: 'admin-active-community-report',
      id: 'd-f8458ee08cb54001aa530f6a5d4874a7',
    },
    {
      filename: 'admin-slack-import-completed',
      id: 'd-b3f8d36ef3354ce987a352ce39893432',
    },
    {
      filename: 'admin-toxic-content',
      id: 'd-5cb8a34555d0497c8093dbace5a1f0d1',
    },
    {
      filename: 'admin-community-created-notification',
      id: 'd-8220ddfc3d3a436a9ea974348c9c2edd',
    },
  ];

  // NOTE VANILA: SENDS 1 TEST EMAIL
  return templates.slice(0, 1).map(template => {
    const json = require(`./test-email-data/${template.filename}`);
    console.error(`✅ Sending test email for ${template.filename}`);
    return sendEmail(template.id, json);
  });
};

init();

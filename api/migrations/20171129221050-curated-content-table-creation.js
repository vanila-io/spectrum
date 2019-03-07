exports.up = function(r, conn) {
  return Promise.all([
    r
      .tableCreate('curatedContent')
      .run(conn)
      .then(() => {
        const types = [
          {
            type: 'design-communities',
            data: [
              'uxstore',
              'uiux',
              'product-design',
              'icon-design',
              'typography',
              'illustrators',
              'design-management',
              'specfm',
              'up-coming',
              'sketchcasts',
              'google-design',
              'design-code',
              'vectors',
              'designhunt',
              'figma',
              'sketch',
              'framer',
              'abstract',
              'invision',
              'principle',
              'compositor',
              'origami-studio',
              'webflow',
              'fuse',
            ],
          },
          {
            type: 'development-communities',
            data: [
              'zeit',
              'realm',
              'expo',
              'compositor',
              'codepen',
              'bootstrap',
              'tachyons',
              'frontend',
              'specfm',
              'android',
              'swiftdev',
              'react-native',
              'react',
              'node',
              'vue-js',
              'angular',
              'ember-js',
              'laravel',
              'elixir',
              'styled-components',
              'graphql',
              'css-in-js',
              'electron',
            ],
          },
          {
            type: 'tech-communities',
            data: [
              'tech-tea',
              'balancemymoney',
              'crypto',
              'btc',
              'ethereum',
              'augmented-reality',
              'voice-interfaces',
            ],
          },
          {
            type: 'life-communities',
            data: [
              'for-good',
              'mental-health',
              'dev-fit',
              'music',
              'tabletop-rpg',
              'gaming',
              'careers',
              'job-opportunities',
              'need-some-work',
            ],
          },
          {
            type: 'top-communities-by-members',
            data: [
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
        ];

        const insertPromises = types.map(type => {
          return r
            .table('curatedContent')
            .insert(type)
            .run(conn);
        });

        return Promise.all([insertPromises]);
      })
      .catch(err => {
        console.log(err);
        throw err;
      }),
  ]);
};

exports.down = function(r, conn) {
  return Promise.all([r.tableDrop('curatedContent').run(conn)]);
};

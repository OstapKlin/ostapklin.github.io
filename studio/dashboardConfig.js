export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc0bf99f63c2e6a469e5fbb',
                  title: 'Sanity Studio',
                  name: 'ostapklin-github-io-studio',
                  apiId: '542db220-77a5-464d-af42-cd140d9e0d40'
                },
                {
                  buildHookId: '5fc0bf992e5496f62e401dc9',
                  title: 'Blog Website',
                  name: 'ostapklin-github-io',
                  apiId: 'e577ee17-51ba-4a50-8ce0-5524944889dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OstapKlin/ostapklin.github.io',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ostapklin-github-io.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

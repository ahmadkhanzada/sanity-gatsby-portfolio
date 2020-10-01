export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5f75986aa4ea86e51cd61e6f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dc214vkz',
                  apiId: '1082ec71-9391-47a6-947a-7034e16a572a'
                },
                {
                  buildHookId: '5f75986acc8a58f856149f5f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6hmjg91d',
                  apiId: 'fc74a867-2ed4-4760-a1b8-4550b25cde96'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sageofsixhacks/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6hmjg91d.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

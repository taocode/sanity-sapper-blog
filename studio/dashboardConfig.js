export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '61a034042458c788d304f412',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-6w3uub3k',
                  apiId: '6ddd04ff-6471-4180-b82a-5124b26c70cd'
                },
                {
                  buildHookId: '61a034046e749fa4c7a6efe1',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-8nddxw13',
                  apiId: '8c10a0ac-ffd3-4b4e-aefa-0cf08a6d2ff6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taocode/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-8nddxw13.netlify.app', category: 'apps'}
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

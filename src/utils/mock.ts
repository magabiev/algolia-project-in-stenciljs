//header
export const header = [
  {
    id: 1,
    header: 'How can we help you?\n',
    img:'https://res.cloudinary.com/hilnmyskv/image/upload/q_auto/v1590760208/Algolia_com_Website_assets/images/search/search-by-algolia.svg',
    headerMenu:[
      {
        id:'all', name: 'all'
      },
      {
        id:'website', name: 'website'
      },
      {
        id:'resources', name: 'resources'
      },
      {
        id:'blog', name: 'blog'
      },
      {
        id: 'docs', name: 'docs'
      }

    ],
    category: [
      {
        id:'site-search', name: 'Site Search'
      },
      {
        id:'search-api',name: 'Search API'
      },
      {
        id:'personalization', name: 'Personalization'
      },
      {
        id:'analytics', name: 'Analytics'
      },
      {
        id:'instantSearch', name: 'InstantSearch'
      },
      {
        id:' customers', name: ' Customers'
      },
      {
        id:'pricing', name: 'Pricing'
      },
      {
        id:'mobile-search', name: 'Mobile Search'
      },
      {
        id:'e-commerce', name: 'E-commerce'
      }
    ],
  }
];
export const blockSection = [
  {
    id: 1,
    header: 'Blog',
    results: 138,
    link: 'view blog',
    pageActive: 1,
    resultPages: 12,
    blocks:[
      {
        id: 1,
        img:'https://blog-api.algolia.com/wp-content/uploads/2020/04/BlogPost_Site_Search_API_How_They_Work_Together-720x400.jpg',
        header: `Site <span>search</span> and <span>APIs</span>: How they work together`,
        text: `… to write. &nbsp; How Search APIs enable` +
            ` powerful <span>search</span> experiences <span>Search APIs</span> are the` +
            ` most straightforward way to integrate modern <span>search</span> …`,
        authorAvatar: 'https://secure.gravatar.com/avatar/ab5610fa71cfc5a9cfb78865ca64621b?s=96&d=mm&r=g',
        authorName:'Benoit Perrot',
        authorAction: 'Director, Engineering'
      },
      {
        id: 2,
        img:'https://blog-api.algolia.com/wp-content/uploads/2020/04/2020-04_what-to-look-for-in-a-search-API-720x400.jpg',
        header: `What to look for in a <span>Search API</span>`,
        text: `… <span>search</span> configurations and use analytics to determine success.` +
            ` &nbsp; Seamlessly integrate <span>search</span> with Algolia’s <span>Search API</span> <span>Search</span> APIs are one …`,
        authorAvatar: 'https://secure.gravatar.com/avatar/ab5610fa71cfc5a9cfb78865ca64621b?s=96&d=mm&r=g',
        authorName:'Benoit Perrot',
        authorAction: 'Director, Engineering'
      },
      {
        id: 3,
        img:'https://blog-api.algolia.com/wp-content/uploads/2015/06/ssd-cheese.png',
        header: 'When Solid State Drives are not that solid',
        text: `It looked just like another page in the middle of the night. One of the servers of our <span>search API</span> …`,
        authorAvatar: 'https://secure.gravatar.com/avatar/0d23f348c8416b65e5acf54cd52edf57?s=96&d=mm&r=g',
        authorName:'Adam Surak',
        authorAction: 'Director of Infrastructure & Security'
      },
      {
        id: 4,
        img:'https://blog-api.algolia.com/wp-content/uploads/2014/03/latency.png',
        header: `New Java & Android <span>Search</span>-as-a-Service <span>API</span> Clients at DroidCon Paris!`,
        text: `Our Search-as-a-Service offer is progressing toward its official release.` +
            ` We launched our Java and Android <span>searchAPI</span>…`,
        authorAvatar: 'https://secure.gravatar.com/avatar/25760a5d4e793e491f26da5db64bb738?s=96&d=mm&r=g',
        authorName:'Julien Lemoine',
        authorAction: 'Co-founder & CTO at Algolia'
      },
      {
        id: 5,
        img:'https://blog-api.algolia.com/wp-content/uploads/2019/04/Blogpost-Loadbalancer-KB-4.18.19-720x400.png',
        header: `One Year of Load Balancing`,
        text: `… place any load balancing infrastructure between our users and our` +
            ` <span>search API</span> servers. We made this choice to keep things …`,
        authorAvatar: 'https://secure.gravatar.com/avatar/003a44a43bf820edb4d6a1cc2a8ee96c?s=96&d=mm&r=g',
        authorName:'Paul Berthaux',
        authorAction: 'Sr. Site Reliability Engineer'
      },
      {
        id: 6,
        img:'https://blog-api.algolia.com/wp-content/uploads/2015/11/illus.png',
        header: `Announcing instantsearch.js: Everything you need for great <span>search</span> in one library`,
        text: `… build the best instant-<span>search</span> experience with Algolia’s` +
            ` hosted <span>search API</span>. So how does this library change <span>search</span>? Our …`,
        authorAvatar: 'https://secure.gravatar.com/avatar/9b5b54cd240a4e451639d3185ed8045d?s=96&d=mm&r=g',
        authorName:'Alexandre Stanislawski',
      },
      {
        id: 7,
        img:'https://blog-api.algolia.com/wp-content/uploads/2015/10/Untitled-design.png',
        header: `OneSignal Builds Hacker News Notifications With a Little Help From Algolia`,
        text: `… us to share how they used Algolia\'s Hacker News <span>Search API</span> to create` +
            ` a demo of their notification platform …`,
        authorAvatar: 'https://secure.gravatar.com/avatar/37e607f71b47cc1e06a61e51d9cf5770?s=96&d=mm&r=g',
        authorName:'Guillaume Dumortier',
      },
      {
        id: 8,
        img:'https://blog-api.algolia.com/wp-content/uploads/2017/06/15994409_935842486546596_8761301610453709536_o.png',
        header: `Building for developers—a tour of new features and resources in 2017`,
        text: `… began. Milliseconds matter, so let\'s go!` +
            ` New API features <span>Search</span> for facet values In March, we announced <span>search</span> for …`,
        authorAvatar: 'https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=96&d=mm&r=g',
        authorName:'Josh Dzielak',
      },
      {
        id: 9,
        img:'https://blog-api.algolia.com/wp-content/uploads/2015/01/hn-blog.png',
        header: `New experimental version of Hacker News <span>Search</span> built with Algoli`,
        text: `… to hn.algolia.com we\'re also providing the HN <span>Search API</span>: a lot of you have used it to …`,
        authorAvatar: 'https://secure.gravatar.com/avatar/e94df49f046da9bdb0c1006f72d570c2?s=96&d=mm&r=g',
        authorName:'kevin',
      },
      {
        id: 10,
        img:'https://blog-api.algolia.com/wp-content/uploads/2019/02/2019-01_Migrating-Heroku-GKE-720x400.png',
        header: 'The Challenging Migration from Heroku to Google Kubernetes Engine',
        text: `… uploading their data to a searchable index,` +
            ` using Algolia’s <span>Search API</span>. Several potential customers asked if we could populate …`,
        authorAvatar: 'https://secure.gravatar.com/avatar/0ada20c283f0ef471356c564d0336856?s=96&d=mm&r=g',
        authorName:'Adrien Joly',
        authorAction: 'Senior Software Engineer'
      },
      {
        id: 11,
        img:'https://blog-api.algolia.com/wp-content/uploads/2014/05/jsonp.png',
        header: `Why JSONP is still Mandatory`,
        text: `… <span>search</span> backend that replies within a few milliseconds through ` +
            `an API that handles security when called from the browser. Cross …`,
        authorAvatar: 'https://secure.gravatar.com/avatar/25760a5d4e793e491f26da5db64bb738?s=96&d=mm&r=g',
        authorName:'Julien Lemoine',
        authorAction: 'Co-founder & CTO at Algolia'
      },
      {
        id: 12,
        img:'https://blog-api.algolia.com/wp-content/uploads/2018/09/08-2018_From-GSA-to-Algolia-01-720x400.png',
        header: `Moving on from GSA to Algolia`,
        text: `… start with a bit about us. Algolia is a <span>search API</span> that ` +
            `gives developers a complete toolkit for building <span>search</span> …`,
        authorAvatar: 'https://secure.gravatar.com/avatar/fc1cfea7486378aec9b576a1511d5209?s=96&d=mm&r=g',
        authorName:'Elliott Gluck',
        authorAction: 'Product Marketing Manager'
      },
    ]

  }
]

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const menus = [
    { name: "Home", linkTo: "/" },
    { name: "Projects", linkTo: "/projects" },
    { name: "Talks", linkTo: "/talks" },
    { name: "About", linkTo: "/about" },
    { name: "Contact", linkTo: "/contact" }
  ];

  const projects = [
    {
      name: 'Cryptocurrencies Visor',
      linkTo: 'https://github.com/Angelfire/crypto-visor',
      description: '9 most popular cryptocurrencies of the moment',
      image:
        'https://camo.githubusercontent.com/354fc5fc9ab2b519c9ed149077f620b289371054/68747470733a2f2f692e696d6775722e636f6d2f4d5a5256714b702e706e67',
      tag: 'React',
    },
    {
      name: 'Sticket Notes Board',
      linkTo: 'https://github.com/Angelfire/sticky-notes',
      description: 'Simple Sticky board for adding your notes',
      image:
        'https://camo.githubusercontent.com/c258dd51fce03a8411d04ddc727ee666d0c3c29e/68747470733a2f2f692e696d6775722e636f6d2f674733714776732e706e67',
      tag: 'React',
    },
    {
      name: 'My Weather',
      linkTo: 'https://github.com/Angelfire/weather-component',
      description: 'Display the current weather at a given location',
      image: 'https://user-images.githubusercontent.com/315504/89359870-7383bb80-d68c-11ea-8299-b6077b850e60.png',
      tag: 'Polymer',
    },
    {
      name: 'Feeling Hungry?',
      linkTo: 'https://github.com/Angelfire/feeling-hungry',
      description: 'Feeling hungry? Get a random meal recipe',
      image:
        'https://user-images.githubusercontent.com/315504/65554985-caf3bf80-def0-11e9-95dc-43763ee40811.png',
      tag: 'React',
    },
    {
      name: 'Word Counter',
      linkTo: 'https://github.com/Angelfire/word-counter',
      description: 'A simple word counter',
      image:
        'https://user-images.githubusercontent.com/315504/65899532-8bf2bd80-e379-11e9-86d4-6dc5e36af314.png',
      tag: 'React',
    },
    {
      name: 'Modal Hooks',
      linkTo: 'https://github.com/Angelfire/modal-hooks',
      description: 'A simple modal window using React hooks',
      image:
        'https://user-images.githubusercontent.com/315504/65899750-fdcb0700-e379-11e9-9b71-c0ab2688cb09.png',
      tag: 'React',
    },
  ];

  const talks = [
    {
      "url": "/angelfire/how-to-stand-out-in-interviews",
      "createdAt": "2019-11-18 16:26:04 UTC",
      "imageUrl": "https://s3.amazonaws.com/media-p.slid.es/thumbnails/cc9a063babdb8af678fa3da0f8572d21/thumb.jpg?1574094518",
      "name": "How to Stand Out in Interviews"
    },
    {
      "url": "/angelfire/deck-6",
      "createdAt": "2019-10-18 23:03:21 UTC",
      "imageUrl": "https://s3.amazonaws.com/media-p.slid.es/thumbnails/d1859d61f4d892679796af54f539fd38/thumb.jpg?1571867767",
      "name": "Big O Notation"
    },
    {
      "url": "/angelfire/deck-6f3ef006-b924-4cee-8e80-584bb162d867",
      "createdAt": "2017-10-11 15:19:20 UTC",
      "imageUrl": "https://s3.amazonaws.com/media-p.slid.es/thumbnails/30d509eb9ba4a6f02e6ebba27b35456d/thumb.jpg?1508272697",
      "name": "Functional Programming"
    },
    {
      "url": "/angelfire/deck-5",
      "createdAt": "2017-02-03 15:39:20 UTC",
      "imageUrl": "https://s3.amazonaws.com/media-p.slid.es/thumbnails/c82760ac0092a4ff076f79e9428926df/thumb.jpg",
      "name": "Vue.js 2.0 (Introduction)"
    },
    {
      "url": "/angelfire/deck",
      "slug": "deck",
      "createdAt": "2016-09-12 23:46:20 UTC",
      "imageUrl": "https://s3.amazonaws.com/media-p.slid.es/thumbnails/74736c7d161110c444324611f18c17a0/thumb.jpg", "name": "JS Module Bundlers"
    },
    {
      "url": "/angelfire/javascriptdp",
      "createdAt": "2014-11-07 00:14:27 UTC",
      "imageUrl": "https://s3.amazonaws.com/media-p.slid.es/thumbnails/angelfire/9d0236/javascriptdp.jpg",
      "name": "Javascript Design Patterns"
    },
    {
      "url": "/angelfire/grunt-vs-gulp",
      "createdAt": "2014-02-27 03:43:29 UTC",
      "imageUrl": "https://s3.amazonaws.com/media-p.slid.es/thumbnails/angelfire/eb09cf/grunt-vs-gulp.jpg",
      "name": "GRUNT VS GULP"
    }
  ];
  
  menus.forEach(menu => {
    const node = {
      name: menu.name,
      linkTo: menu.linkTo,
      id: createNodeId(`Menu-${menu.name}`),
      internal: {
        type: "Menu",
        contentDigest: createContentDigest(menu),
      },
    };
    actions.createNode(node);
  });

  projects.forEach(project => {
    const node2 = {
      name: project.name,
      linkTo: project.linkTo,
      description: project.description,
      image: project.image,
      tag: project.tag,
      id: createNodeId(`Project-${project.name}`),
      internal: {
        type: "Project",
        contentDigest: createContentDigest(project),
      }
    };
    actions.createNode(node2);
  });

  talks.forEach(talk => {
    const node3 = {
      url: talk.url,
      createdAt: talk.createdAt,
      imageUrl: talk.imageUrl,
      name: talk.name,
      id: createNodeId(`Talk-${talk.name}`),
      internal: {
        type: "Talk",
        contentDigest: createContentDigest(talk),
      }
    };
    actions.createNode(node3);
  });
};

import { Icon } from '@iconify/react';
import { Home, LocalCafe, Code, GitHub, VideogameAsset, Build, Web, CloudDownload, RssFeed, Book, Gesture, FileCopy } from '@material-ui/icons';
// import peopleFill from '@iconify/icons-eva/people-fill';
// import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
// import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: '快速启动',
    path: '/dashboard/app',
    icon:<Home />
  },
  {
    title: '技术博客',
    path: '/links/blogs',
    icon: <LocalCafe />
  },
  {
    title: '语言框架',
    path: '/links/pl',
    icon: <Code />
  },
  {
    title: '圈子社区',
    path: '/links/sns',
    icon: <GitHub />
  },
  {
    title: '奇趣娱乐',
    path: '/links/game3c',
    icon: <VideogameAsset />
  },

  {
    title: '电子阅读',
    path: '/links/ereading',
    icon: <Book />
  },

  {
    title: '设计图标',
    path: '/links/design',
    icon: <Gesture />
  },
  {
    title: '工具软件',
    path: '/links/tool',
    icon: <Build />,
    children: [{
      title: '开源免费',
      path: '/links/tool',
      icon: <Build />
    },{
      title: '在线工具',
      path: '/links/online',
      icon: <Web />
    }]
  },
  {
    title: '文档教程',
    path: '/links/docs',
    icon: <FileCopy />,
    divider: true
  },
  {
    title: '素材资源',
    path: '/links/resources',
    icon: <CloudDownload />,
    divider:true
  },
  {
    title: 'RSS订阅',
    path: '/dashboard/blog',
    icon: <RssFeed />
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon(peopleFill)
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon(shoppingBagFill)
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon(fileTextFill)
  // },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  }
];

export default sidebarConfig;

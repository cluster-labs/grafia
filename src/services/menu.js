export async function getLeftMenuData() {
  return [
    /* {
      title: 'Settings',
      key: 'settings',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
    },
    {
      title: 'Documentation',
      key: 'documentation',
      url: 'https://docs.cleanuitemplate.com/react/getting-started',
      target: '_blank',
      icon: 'icmn icmn-books',
    },
    {
      divider: true,
    }, */
    {
      title: 'My Cloud',
      key: 'docs',
      url: '/docs',
      icon: 'icmn icmn-cloud',
    },
    {
      title: 'My Devices',
      key: 'devices',
      url: '/devices',
      icon: 'icmn icmn-mobile',
    },
    {
      title: 'Sync with mobile',
      key: 'sync',
      url: '/sync',
      icon: 'icmn icmn-loop2',
    },
    {
      title: 'Recent',
      key: 'recent',
      url: '/recent',
      icon: 'icmn icmn-clock',
    },
    {
      title: 'Test',
      key: 'test',
      url: '/test',
      icon: 'icmn icmn-lab',
    },
    {
      title: 'Dashboard Alpha',
      key: 'dashboardAlpha',
      url: '/dashboard/alpha',
      icon: 'icmn icmn-home',
    },
    {
      title: 'AntDesign Components',
      key: 'antComponents',
      icon: 'icmn icmn-menu',
      url: '/antd',
    },
  ]
}
export async function getTopMenuData() {
  return [
    {
      title: 'Settings',
      key: 'settings',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
    },
    {
      title: 'Docs',
      key: 'documentation',
      url: 'https://docs.cleanuitemplate.com/react/getting-started',
      target: '_blank',
      icon: 'icmn icmn-books',
    },
    {
      title: 'Dashboard Alpha',
      key: 'dashboardAlpha',
      url: '/dashboard/alpha',
      icon: 'icmn icmn-home',
    },
    {
      title: 'AntDesign',
      key: 'antComponents',
      icon: 'icmn icmn-menu',
      url: '/antd',
    },
  ]
}

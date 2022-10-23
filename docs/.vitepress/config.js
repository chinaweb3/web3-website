export default {
    title: 'web3中文社区',
    description: 'Web3.0是对现在的互联网的底层协议“万维网”的一个衍生。Web3.0则是人们对下一代互联网的期待，它意味着机器能读懂任何信息（也就是语义网），网站可以根据信息提供智能删选和提供更好的信息（人工智能），互联网无处不在（物联网），更重要的是，互联网的数据的所有权将是去中心化的',
    themeConfig: {
        sidebar: {
            '/article/': sidebarArticle()
        },
        footer: {
            message: 'MIT License',
            copyright: '京ICP备2022029895号'
        }
    }
}

function sidebarArticle() {
    return [
      {
        text: '区块链',
        collapsible: true,
        items: [
          { text: '一.比特币的前世今生', link: '/article/1' },
          { text: '二.拜占庭将军问题', link: '/article/2' }
        ]
      },
      {
        text: '元宇宙',
        collapsible: true,
        items: [
          { text: '元宇宙硬件设备现在发展到何种程度了', link: '/article/3' },
        ]
      }
    ]
  }
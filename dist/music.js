const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '木兰',
        artist: '李宇春',
        url: 'http://www.ytmp3.cn/down/55639.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      },{
        name: '一趟',
        artist: '李宇春',
        url: 'http://www.ytmp3.cn/down/49285.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: '下个路口见',
        artist: '李宇春',
        url: 'http://www.ytmp3.cn/down/50718.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '存在感',
        artist: '李宇春',
        url: 'http://www.ytmp3.cn/down/48581.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});

export default {
  pages: [
    "pages/welcome/welcome",
    "pages/campaign/campaign",
    "pages/login/login",
    "pages/list/list",
    "pages/ticket/ticket",
    "pages/me/me",
    "pages/info/info"
  ],
  entryPagePath: "pages/welcome/welcome",
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: "pages/list/list",
        iconPath: "images/movie.png",
        selectedIconPath: "images/movie_active.png"
      },
      {
        pagePath: "pages/ticket/ticket",
        iconPath: "images/ticket.png",
        selectedIconPath: "images/ticket_active.png"
      },
      {
        pagePath: "pages/me/me",
        iconPath: "images/user.png",
        selectedIconPath: "images/user_active.png"
      }
    ]
  },
  usingComponents: {}
};

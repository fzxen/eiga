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
        iconPath: "./assets/images/movie.png",
        selectedIconPath: "./assets/images/movie_active.png"
      },
      {
        pagePath: "pages/ticket/ticket",
        iconPath: "./assets/images/ticket.png",
        selectedIconPath: "./assets/images/ticket_active.png"
      },
      {
        pagePath: "pages/me/me",
        iconPath: "./assets/images/user.png",
        selectedIconPath: "./assets/images/user_active.png"
      }
    ]
  },
  usingComponents: {}
};

import MyRequest from "@/services";

export const homeApi = {
  GetGoodPriceData: () => {
    return MyRequest.get({
      url: "/home/goodprice",
    });
  },
  GetHomeHighScoreData() {
    return MyRequest.get({
      url: "/home/highscore",
    });
  },
  GetHomeDiscountData() {
    return MyRequest.get({
      url: "/home/discount",
    });
  },
  GetHomeHotRecommendData() {
    return MyRequest.get({
      url: "/home/hotrecommenddest",
    });
  },
  GetHomeLongforData() {
    return MyRequest.get({
      url: "/home/longfor",
    });
  },
};

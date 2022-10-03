import MyRequest from "@/services";

export const entireApi = {
  GetEntireRoomList: (params) => {
    return MyRequest.get({
      url: "/entire/list",
      params,
    });
  },
};

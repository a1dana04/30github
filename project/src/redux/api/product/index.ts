import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMainPage: build.query<
    PRODUCT.GetMainPageResponse,
    PRODUCT.GetMainPageRequest
  >({
    query: () => ({
      url: "/main_page",
      method: "GET",
    }),
    providesTags: ["data"],
  }),
  }),
});
export const {
 useGetMainPageQuery
} = api;

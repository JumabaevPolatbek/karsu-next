import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Menus } from "../types/menu";

export const menuAPI = createApi({
  reducerPath: "getMenu",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.yulbasali.uz/api",
  }),
  endpoints: (builder) => ({
    getMenus: builder.query<Menus,string>({
      query: (locale) => `getMenu/${locale}`,
    }),
  }),
});

export const { useGetMenusQuery } = menuAPI;
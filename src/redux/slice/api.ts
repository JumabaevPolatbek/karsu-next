import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Menus } from '../types/menu';
import type { Action, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
type RootState = any; // normally inferred from state

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
	return action.type === HYDRATE;
}
export const menuAPI = createApi({
	reducerPath: 'getMenu',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://apikarsu.karsu.uz/api',
	}),
	extractRehydrationInfo(action, { reducerPath }): any {
		if (isHydrateAction(action)) {
			return action.payload[reducerPath];
		}
	},
	endpoints: (builder) => ({
		getMenus: builder.query<Menus, string>({
			query: (locale) => `getMenu/${locale}`,
		}),
	}),
});

export const { useGetMenusQuery } = menuAPI;

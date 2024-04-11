import {
    FetchArgs,
    createApi,
    fetchBaseQuery,
    retry,
} from "@reduxjs/toolkit/query/react";
import { loader } from "./staticApi";

const baseQuery = fetchBaseQuery({
    baseUrl:typeof window !== 'undefined' ? `${window?.location?.origin}/api` :'/',
    prepareHeaders: async (headers) => {
        return headers;
    },
});

//used for token handle and common response and error

const staggeredBaseQueryWithBailOut = retry(
    async (args: string | FetchArgs, api, extraOptions) => {
        api.dispatch(loader(true));
        let result = await baseQuery(args, api, extraOptions);
        if (result) {
            api.dispatch(loader(false));
          }
        return result;
    },
    {
        maxRetries: 0,
    }
);

export const baseApi = createApi({
    reducerPath: "baseApiReducer",
    baseQuery: staggeredBaseQueryWithBailOut,
    endpoints: () => ({}),
});

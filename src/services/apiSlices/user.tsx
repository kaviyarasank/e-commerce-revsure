import { baseApi } from "./baseQuery";

const userAnalytics = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getUserData: build.query({
            query: () => ({
                url:'/user/signupusers',
                method: "GET",
            }),
        }),

        getHeatMapData: build.query({
            query: () => ({
                url:'/user/heatmap',
                method: "GET",
            }),
        }),

        getUserList: build.query({
            query: () => ({
                url:'/user/userList',
                method: "GET",
            }),
        }),

    }),
    // @ts-ignore
    overrideExisting: module.hot?.status() === "apply",
});

export const {
     useGetUserDataQuery ,
     useGetHeatMapDataQuery,
     useGetUserListQuery
    } = userAnalytics;

import { baseApi } from "./baseQuery";

const salesAnalytics = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getSalesData: build.query({
            query: () => ({
                url:'/analytics/salesData',
                method: "GET",
            }),
        }),

        salesPie: build.query({
            query: () => ({
                url:'/analytics/salespie',
                method: "GET",
            }),
        }),

        salesBar: build.query({
            query: () => ({
                url:'/analytics/salesbar',
                method: "GET",
            }),
        }),

    }),
    // @ts-ignore
    overrideExisting: module.hot?.status() === "apply",
});

export const {
     useGetSalesDataQuery ,
     useSalesPieQuery,
     useSalesBarQuery
    } = salesAnalytics;

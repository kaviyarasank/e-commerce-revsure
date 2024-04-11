import { baseApi } from "./baseQuery";

const inventoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getAreaChart: build.query({
            query: () => ({
                url:'/inventory/areaChart',
                method: "GET",
            }),
        }),

        getStockData: build.query({
            query: () => ({
                url:'/inventory/stock',
                method: "GET",
            }),
        }),

       
    }),
    // @ts-ignore
    overrideExisting: module.hot?.status() === "apply",
});

export const {
     useGetAreaChartQuery ,
     useGetStockDataQuery
    } = inventoryApi;

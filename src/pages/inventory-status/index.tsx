import { useGetAreaChartQuery, useGetStockDataQuery } from "@/services/apiSlices/inventory";
import dynamic from "next/dynamic";
import React from "react"

const AreaChart = dynamic(() => import("@/components/inventoryPage/areaChart"), {
    ssr: false,
});

const StockChart = dynamic(() => import("@/components/inventoryPage/stock"), {
    ssr: false,
});


const InventoryStatus = () => {

    const { data: areaChartData } = useGetAreaChartQuery('')
    const { data: getStockData } = useGetStockDataQuery('')
    return (
        <div>
            <p>Inventory Over Time Area Chart</p>
            <AreaChart data={areaChartData?.data ? areaChartData?.data : []} />
            <p>Low Stock Products List</p>
            <StockChart datas={getStockData?.data ? getStockData?.data :[]}/>
        </div>
    )
};

export default InventoryStatus;

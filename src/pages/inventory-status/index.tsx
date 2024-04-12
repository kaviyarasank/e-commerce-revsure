import { StaticValues } from "@/constants";
import { useGetAreaChartQuery, useGetStockDataQuery } from "@/services/apiSlices/inventory";
import { Card } from "@mui/material";
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
            <Card className="p-2 mt-2">
                <p>{StaticValues.InventoryAreaChart}</p>
                <AreaChart data={areaChartData?.data ? areaChartData?.data : []} />
            </Card>

            <Card className="p-2 mt-2">
                <p>{StaticValues.InventoryStockChart}</p>
                <StockChart datas={getStockData?.data ? getStockData?.data : []} />
            </Card>
        </div>
    )
};

export default InventoryStatus;

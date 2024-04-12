import { StaticValues } from "@/constants";
import { useGetSalesDataQuery, useSalesBarQuery, useSalesPieQuery } from "@/services/apiSlices/salesAnalytics";
import { Card } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react"

const LineChart = dynamic(() => import("@/components/salesAnalytics/lineChart"), {
    ssr: false,
});

const PieChart = dynamic(() => import("@/components/salesAnalytics/pieChart"), {
    ssr: false,
});

const BarChart = dynamic(() => import("@/components/salesAnalytics/barChart"), {
    ssr: false,
});

const SalesAnalytics = () => {

    const { data: salesData, isLoading } = useGetSalesDataQuery('');
    const { data: salesPieData } = useSalesPieQuery('');
    const { data: salesBar } = useSalesBarQuery('')

    return (
        <div>
            <Card className="p-2 mt-2">
                <p>{StaticValues.SalesDataLineChart}</p>
                <LineChart data={salesData?.data ? salesData?.data : []} />
            </Card>

            <Card className="p-2 mt-2">
                <p>{StaticValues.salesDataPieChart}</p>
                <PieChart data={salesPieData?.data ? salesPieData?.data : []} />
            </Card>

            <Card className="p-2 mt-2">
                <p>{StaticValues.salesDataBarChart}</p>
                <BarChart data={salesBar?.data ? salesBar?.data : []} />
            </Card>
        </div>
    )
};

export default SalesAnalytics;

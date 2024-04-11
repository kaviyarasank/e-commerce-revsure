import { useGetSalesDataQuery, useSalesBarQuery, useSalesPieQuery } from "@/services/apiSlices/salesAnalytics";
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
            <p>Sales Over Time Line Chart</p>
            <LineChart data={salesData?.data ? salesData?.data :[]} />
            <p>Product-wise Sales Pie Chart</p>
            <PieChart data={salesPieData?.data ? salesPieData?.data :[]} />
            <p>Top Selling Products Bar Chart</p>
            <BarChart data={salesBar?.data ? salesBar?.data :[]}/>
        </div>
    )
};

export default SalesAnalytics;

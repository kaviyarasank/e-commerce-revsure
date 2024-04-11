import UserTable from "@/components/userActivities/userTable";
import { useGetHeatMapDataQuery, useGetUserDataQuery, useGetUserListQuery } from "@/services/apiSlices/user";
import dynamic from "next/dynamic";
import React from "react"

const LineChart = dynamic(() => import("@/components/salesAnalytics/lineChart"), {
    ssr: false,
});

const HeatMapChart = dynamic(() => import("@/components/userActivities/heatMap"), {
    ssr: false,
});

const UserActivities = () => {
    const { data: userData } = useGetUserDataQuery('')
    const { data: getHeatMapData } = useGetHeatMapDataQuery('');
    const { data: getList } = useGetUserListQuery('')
    return (
        <div>
            <p>User Signups Line Chart</p>
            <LineChart data={userData?.data ? userData?.data : []} />
            <p>Heatmap</p>
            <HeatMapChart data={getHeatMapData?.data ? getHeatMapData?.data : []} />
            <UserTable data={getList?.data ? getList?.data : []} />
        </div>
    )
};

export default UserActivities;

import UserTable from "@/components/userActivities/userTable";
import { StaticValues } from "@/constants";
import { useGetHeatMapDataQuery, useGetUserDataQuery, useGetUserListQuery } from "@/services/apiSlices/user";
import { Card } from "@mui/material";
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
            <Card className="p-2 mt-2">
                <p>{StaticValues.userLineChart}</p>
                <LineChart data={userData?.data ? userData?.data : []} />
            </Card>

            <Card className="p-2 mt-2">

                <p>{StaticValues.userHeatMap}</p>
                <HeatMapChart data={getHeatMapData?.data ? getHeatMapData?.data : []} />
            </Card>

            <Card className="p-2 mt-2">
                <p>{StaticValues.userTable}</p>
                <UserTable data={getList?.data ? getList?.data : []} />
            </Card>
        </div>
    )
};

export default UserActivities;

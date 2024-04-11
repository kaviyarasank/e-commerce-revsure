import React from 'react';
import { Line } from '@ant-design/charts';

interface Props {
    data: any
}
const LineChart = ({ data }: Props) => {
    const config = {
        data,
        height: 400,
        xField: 'month',
        yField: 'value',
    };
    return <Line {...config} />;
};
export default LineChart;
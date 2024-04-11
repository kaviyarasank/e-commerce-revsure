import React from 'react';
import { Area } from '@ant-design/plots';

interface Props{
    data:any;
}

const AreaChart = ({data}:Props) => {
  const config = {
    data: data,
    xField: (d:any) => new Date(d.date),
    yField: 'quantity',
  };

  return <Area {...config} />;
};

export default AreaChart;
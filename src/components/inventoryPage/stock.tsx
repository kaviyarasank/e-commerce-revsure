import React from 'react';
import { Stock } from '@ant-design/plots';

interface Props{
  datas:any
}
const StockChart = ({datas}:Props) => {

  const config:any = {
    xField: 'date',
    yField: ['open', 'close', 'high', 'low'],
    data: datas?.map((i:any) => ({ ...i, date: new Date(i.trade_date) })),
  };

  return <Stock {...config} />;
};


export default StockChart;
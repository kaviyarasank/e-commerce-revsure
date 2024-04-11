import React from 'react';
import { Heatmap } from '@ant-design/plots';

interface Props {
    data:any
}
const HeatMapChart = ({data}:Props) => {
  const config = {
    mark: 'heatmap',
    data:data,
    xField: 'g',
    yField: 'l',
    colorField: 'count',
    sizeField: 26,
    style: {
      opacity: 0,
    },
  };

  

  return <Heatmap {...config} />;
};

export default HeatMapChart;
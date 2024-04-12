import React from 'react';
import { Pie } from '@ant-design/plots';

interface Props {
    data: any
}

const PieChart = ({ data }: Props) => {
    const config = {
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          text: (d:any) => `${d.type}\n ${d.value}`,
          position: 'spider',
        },
        legend: {
          color: {
            title: false,
            position: 'right',
            rowPadding: 5,
          },
        },
      };
    return <Pie {...config} />;
};

export default PieChart;
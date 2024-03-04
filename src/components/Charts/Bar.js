import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";

// Chart Component
const Bar = () => {
  const [chartOptions, setChartOptions] = useState({
    title: { text: "Accounts Usage", fontSize: 24 },
    subtitle: { text: "Data from 2024" },
    theme: 'ag-material',
    height: 400,
    data: [
      { month: "Jan", avgTemp: 2.3, iceCreamSales: 162 },
      { month: "Mar", avgTemp: 6.3, iceCreamSales: 302 },
      { month: "May", avgTemp: 16.2, iceCreamSales: 800 },
      { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254 },
      { month: "Sep", avgTemp: 14.5, iceCreamSales: 950 },
      { month: "Nov", avgTemp: 8.9, iceCreamSales: 200 },
      { month: "Feb", avgTemp: 8, iceCreamSales: 1500 },
    ],
    series: [{ type: "bar", xKey: "month", yKey: "iceCreamSales" }],
  });

  return <AgChartsReact options={chartOptions} />;
};

export default Bar;

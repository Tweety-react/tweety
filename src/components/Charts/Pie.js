import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";

const Pie = () => {
  const [options, setOptions] = useState({
    data: [
      { asset: "Proxy 1", amount: 60000 },
      { asset: "Proxy 2", amount: 40000 },
      { asset: "Proxy 3", amount: 7000 },
      { asset: "Proxy 4", amount: 5000 },
      { asset: "Proxy 5", amount: 3000 },
    ],
    title: {
      text: "Proxies Composition",
      fontSize: 24,
    },
    theme: 'ag-material',
    height: 400,
    series: [
      {
        type: "pie",
        angleKey: "amount",
        calloutLabelKey: "asset",
        legendItemKey: "asset",
      },
    ],
  });

  return <AgChartsReact options={options} />;
};

export default Pie;

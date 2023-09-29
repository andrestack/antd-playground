import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";

type DataType = {
  type: string;
  value: number;
};

type ConfigType = {
  appendPadding: number;
  data: DataType[];
  angleField: string;
  colorField: string;
  radius: number;
  innerRadius: number;
  label: {
    type: string;
    offset: string;
    content: string;
    style: {
      textAlign: string;
      fontSize: number;
    };
  };
  interactions: [
    {
      type: string;
    },
    {
      type: string;
    }
  ];
  statistic: {
    title: any;
    content: {
      style: {
        whiteSpace: string;
        overflow: "hidden";
        textOverflow: string;
      };
      content: string;
    };
  };
};

const PieChartDemo = () => {
  const data: DataType[] = [
    {
      type: "分类一",
      value: 27,
    },
    {
      type: "分类二",
      value: 25,
    },
    {
      type: "分类三",
      value: 18,
    },
    {
      type: "分类四",
      value: 15,
    },
    {
      type: "分类五",
      value: 10,
    },
    {
      type: "其他",
      value: 5,
    },
  ];
  const config: ConfigType = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "AntV\nG2Plot",
      },
    },
  };
  return <Pie {...config} />;
};

export default PieChartDemo;

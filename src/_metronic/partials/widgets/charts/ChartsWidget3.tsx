/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react'
import ApexCharts, { ApexOptions } from 'apexcharts'
import { getCSS, getCSSVariableValue } from '../../../assets/ts/_utils'
import { FeedbackButton } from '../../../../app/modules/shared/FeedbackButton/FeedbackButton'

type Props = {
  chartHeight?: number
  className: string
  portfolioValue?: any
  name?: any
  description?: any
  intervalLabel?: any
  pointStroke?: any
  hideTargetLabel?: any
  pointFill?: any
  table1Data?: any
  feedbackLink?: string
  targetScore?: any
  data?: any
  dataPoint?: any
  hideTarget?: any
  speedDateValue?: any
}

const ChartsWidget3: React.FC<Props> = ({ className, chartHeight = 350, hideTarget, intervalLabel, feedbackLink, data = [], name, description, pointStroke, pointFill, targetScore, hideTargetLabel }) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!chartRef.current) {
      return
    }
    const chart = new ApexCharts(chartRef.current, getChartOptions(chartHeight, intervalLabel, data, name, pointStroke, pointFill, Number(targetScore), hideTarget))

    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, chartHeight, intervalLabel, data, name, pointStroke, pointFill, targetScore, hideTargetLabel, hideTarget])
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-6 mb-1'>{name}</span>
          <span className='text-muted fw-bold fs-9'>{description}</span>
          {/* <span className='text-muted fw-bold fs-9 mt-1'>
            {!hideTargetLabel &&
              `target ${name !== "Delivery Speed" ? "<= 0.5" : ">= 1"}`
            }
          </span> */}
        </h3>
        <FeedbackButton
          link={feedbackLink}
          containerStyle={{
            position: 'absolute',
            right: '13px',
            top: '24px',
            zIndex: 9,
            opacity: 0.3,
          }} />
      </div>
      <div className='card-body'>
        <div ref={chartRef} id='kt_charts_widget_3_chart' style={{ height: `${chartHeight}px` }}></div>
      </div>
    </div>
  )
}

export { ChartsWidget3 }

function getChartOptions(height: number, intervalLabel: any, data: any, name: any, pointStroke: any, pointFill: any, targetScore: number, hideTarget: boolean): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')
  const baseColor = getCSSVariableValue('--bs-info')
  if (data.length === 0) return {
    series: [
      {

        name: "",
        data: data.map((i: any) => {
          return {
            x: i.date,
            y: i.metricValue * 100
          }
        })

      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: height,
      toolbar: {
        show: false,
      },
    },

    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
      colors: [pointFill]
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 2,
      colors: [pointStroke],
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        format: 'MMM',
        showDuplicates: false,
        style: {
          colors: labelColor,
          fontSize: '9px',
        },
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '9px',
        },
      }
    },
    yaxis: {
      forceNiceScale: true,
      min: 0,
      labels: {
        style: {
          colors: labelColor,
          fontSize: '7px',
          fontWeight: 'bold'
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '10px',

      },
      x: {
        show: false,
      },
      y: {
        formatter: function (val) {
          return `${name} : ` + val
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ['white'],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    markers: {
      strokeColors: pointStroke,
      strokeWidth: 2,
    },
  }
  return {
    series: [
      {

        name: "",
        data: data.map((i: any) => {
          return {
            x: i.date,
            y: i.metricValue
          }
        })

      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: height,
      toolbar: {
        show: false,
      },
    },
    annotations: hideTarget ? {} : {
      yaxis: [
        {

          y: Number(targetScore),
          borderColor: '#999',
          label: {
            text: 'target4',
            style: {
              fontSize: '9px',
              color: "#fff",
              background: pointStroke
            }
          }
        }
      ],
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
      colors: [pointFill]
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 2,
      colors: [pointStroke],
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        format: 'MMM',
        showDuplicates: false,
        style: {
          colors: labelColor,
          fontSize: '9px',
        },
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '9px',
        },
      }
    },
    yaxis: name !== "QA Lead Time" ? {
      // max: 100,
      labels: {
        formatter: (value) => (value * 100).toFixed(1) + '%',
        style: {
          colors: labelColor,
          fontSize: '7px',
          fontWeight: 'bold'
        },
      },
    } : {
      forceNiceScale: true,
      min: 0,
      labels: {
        style: {
          colors: labelColor,
          fontSize: '7px',
          fontWeight: 'bold'
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '10px',

      },
      x: {
        show: false,
      },
      y: name !== "QA Lead Time" ? {
        formatter: function (val) {
          return `${name} : ` + Math.fround(val * 100) + '%'
        },
      } : {
        formatter: function (val) {
          return `${name} : ` + val
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ['white'],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    markers: {
      strokeColors: pointStroke,
      strokeWidth: 2,
    },
  }
}

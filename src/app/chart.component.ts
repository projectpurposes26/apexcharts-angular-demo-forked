import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexStroke,
  ApexLegend,
  ApexTooltip,
  ApexMarkers,
  ApexGrid,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  stroke: ApexStroke;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './chart.component.html',
})
export class AppChart implements AfterViewInit, OnDestroy {
  @ViewChild('chart') chart!: ChartComponent;

  public chartOptions: Partial<ChartOptions> = {
    series: [
      {
        name: 'Desktop impressions',
        data: [176, 168, 180],
      },
    ],

    colors: ['#000000'],

    chart: {
      height: 350,
      type: 'line',
      background: 'transparent',

      toolbar: {
        show: false,
      },

      zoom: {
        enabled: false,
      },

      animations: {
        enabled: false,
      },
    },

    // Permanent values displayed above the points
    dataLabels: {
      enabled: true,
      offsetY: -8,

      // Prevent the first and last labels from touching the edges
      offsetX: (options: any) => {
        const currentIndex = options.dataPointIndex;

        const lastIndex =
          options.w.config.series[options.seriesIndex].data.length - 1;

        if (currentIndex === 0) {
          return 14;
        }

        if (currentIndex === lastIndex) {
          return -14;
        }

        return 0;
      },

      formatter: (value: number) => value.toLocaleString(),

      style: {
        fontSize: '12px',
        fontWeight: 600,
        colors: ['#000000'],
      },

      background: {
        enabled: false,
      },

      dropShadow: {
        enabled: false,
      },
    },

    // Filled black points with a thick white outline
    markers: {
      size: 6,
      shape: 'circle',
      colors: ['#000000'],
      strokeColors: '#ffffff',
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,

      hover: {
        size: 6,
      },
    },

    // Black connecting line
    stroke: {
      curve: 'straight',
      width: 3,
      colors: ['#000000'],
    },

    // Centered legend
    legend: {
      show: true,
      showForSingleSeries: true,
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '15px',
      fontWeight: 600,

      labels: {
        colors: '#000000',
      },

      markers: {
        size: 9,
        shape: 'square',
        fillColors: ['#000000'],
        strokeWidth: 0,
      },

      onItemClick: {
        toggleDataSeries: false,
      },

      onItemHover: {
        highlightDataSeries: false,
      },
    },

    tooltip: {
      enabled: false,
    },

    // Black horizontal and vertical grid lines
    grid: {
      show: true,
      borderColor: '#000000',
      strokeDashArray: 0,
      position: 'back',

      xaxis: {
        lines: {
          show: true,
        },
      },

      yaxis: {
        lines: {
          show: true,
        },
      },

      padding: {
        top: 25,
        right: 5,
        bottom: 0,
        left: 5,
      },
    },

    xaxis: {
      categories: ['Apr 2026', 'May 2026', 'Jun 2026'],
      tickPlacement: 'on',

      axisBorder: {
        show: true,
        color: '#000000',
      },

      axisTicks: {
        show: true,
        color: '#000000',
      },

      labels: {
        rotate: 0,
        hideOverlappingLabels: true,
        trim: false,

        style: {
          colors: ['#000000', '#000000', '#000000'],
          fontSize: '13px',
          fontWeight: 500,
        },
      },
    },

    // Start at zero and let ApexCharts calculate the upper range
    yaxis: {
      min: 0,
      forceNiceScale: true,
      decimalsInFloat: 0,

      axisBorder: {
        show: true,
        color: '#000000',
      },

      axisTicks: {
        show: true,
        color: '#000000',
      },

      labels: {
        offsetX: -10,

        formatter: (value: number) => {
          return Math.round(value).toString();
        },

        style: {
          colors: ['#000000'],
          fontSize: '13px',
          fontWeight: 500,
        },
      },
    },
  };

  ngAfterViewInit(): void {
    // If required, replace the placeholder with your existing license key.
    // (window as any).ApexCharts.setLicense(
    //   'YOUR_APEXCHARTS_LICENSE_KEY'
    // );
  }

  ngOnDestroy(): void {
    // No cleanup needed
  }
}
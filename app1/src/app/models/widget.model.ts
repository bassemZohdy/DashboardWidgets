import { ChartType } from "./chart-type";
import { WidgetParameter } from "./widget-parameter.model";
import { WidgetType } from "./widget-type";

export class Widget {
  code: string;
  title: string;
  columns: number;
  rows: number;
  order: number;
  type: WidgetType;
  chartType: ChartType;
  parameters: WidgetParameter[];

  constructor(options: {
    code?: string;
    title?: string;
    columns?: number;
    rows?: number;
    order?: number;
    type?: WidgetType;
    chartType?: ChartType;
    parameters?: WidgetParameter[];
  }) {
    this.code = options.code || '';
    this.title = options.title || '';
    this.columns = options.columns || 1;
    this.rows = options.rows || 1;
    this.order = options.order || 1;
    this.type = options.type || 1;
    this.order = options.order || 1;
    this.chartType = options.chartType || ChartType.bar;
    this.parameters = options.parameters || [];
  }
}

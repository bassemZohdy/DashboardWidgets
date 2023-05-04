import { Widget } from './widget.model';

export class Dashboard {
  code: string;
  title: string;
  columns: number;
  widgets: Widget[];
  constructor(options: {
    code?: string;
    title?: string;
    columns?: number;
    widgets?: Widget[];
  }) {
    this.code = options.code || '';
    this.title = options.title || '';
    this.columns = options.columns || 1;
    this.widgets = options.widgets || [];
  }
}

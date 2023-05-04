import { WidgetParameterType } from "./widget-parameter-type";

export interface WidgetParameter {
  code: string;
  lable: string;
  type: WidgetParameterType;
  defaultValue: string;
}

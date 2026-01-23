declare module "react-github-calendar" {
  import { FunctionComponent } from "react"
  import { Props as ActivityCalendarProps } from "react-activity-calendar"

  export interface Props extends Omit<ActivityCalendarProps, "data"> {
    username: string
    year?: number | "last"
    transformData?: (data: any[]) => any[]
    hideColorLegend?: boolean
    hideMonthLabels?: boolean
    hideTotalCount?: boolean
  }

  export const GitHubCalendar: FunctionComponent<Props>
}

declare module "react-activity-calendar" {
  import { FunctionComponent } from "react"

  export interface Activity {
    date: string
    count: number
    level: 0 | 1 | 2 | 3 | 4
  }

  export interface Props {
    username?: string
    data?: Array<Activity>
    theme?: any
    colorScheme?: "light" | "dark"
    labels?: {
      totalCount?: string
      legend?: {
        less: string
        more: string
      }
    }
    totalCount?: number
    blockMargin?: number
    blockRadius?: number
    blockSize?: number
    fontSize?: number
    style?: React.CSSProperties
    loading?: boolean
    renderBlock?: (
      block: React.ReactElement,
      activity: Activity,
    ) => React.ReactElement
  }

  export const ActivityCalendar: FunctionComponent<Props>
}

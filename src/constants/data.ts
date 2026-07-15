import { SvgIconComponent, BarChart, Groups, Moving } from "@mui/icons-material";

export const DATA_DETAIL: { id: number, name: string, icon: SvgIconComponent, top: number, left: number, delay: number, y: number[], align: string }[] = [
    {
        id: 1,
        name: "Dashboard thông minh",
        icon: BarChart,
        top: 0,
        left: 0,
        delay: 0,
        y: [0, -12, 0],
        align: 'left'
    },
    {
        id: 2,
        name: "Cộng tác thời gian thực",
        icon: Groups,
        top: 120,
        left: 120,
        delay: 0.3,
        y: [0, 10, 0],
        align: 'right'
    },
    {
        id: 3,
        name: "Báo cáo chi tiết",
        icon: Moving,
        top: 240,
        left: 40,
        delay: 0.6,
        y: [0, 20, 0],
        align: 'left'
    }
]
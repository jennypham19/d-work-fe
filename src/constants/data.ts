import { SvgIconComponent, BarChart, Groups, Moving, Summarize, VerifiedUser, AccountBox, Copyright, Gavel, Cancel } from "@mui/icons-material";
import React, { ReactNode } from "react";

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
export const MENUS: {id: string, label: string, icon?: SvgIconComponent}[] = [
  {
    id: "summary",
    label: "Tóm tắt nhanh",
    icon: Summarize
  },
  {
    id: "accept",
    label: "Chấp nhận điều khoản",
    icon: VerifiedUser
  },
  {
    id: "user",
    label: "Nghĩa vụ người dùng",
    icon: AccountBox
  },
  {
    id: "copyright",
    label: "Sở hữu trí tuệ",
    icon: Copyright
  },
  {
    id: "limit",
    label: "Giới hạn trách nhiệm",
    icon: Gavel
  },
  {
    id: "terminate",
    label: "Chấm dứt dịch vụ",
    icon: Cancel
  },
];

export const SUMMARY: { id: number, label: string, content: string}[] = [
  {
    id: 1,
    label: 'Dữ liệu của bạn',
    content: 'Bạn sở hữu toàn bộ dữ liệu công việc của mình. Chúng tôi chỉ xử lý dữ liệu để cung cấp dịch vụ.'
  },
  {
    id: 2,
    label: 'Bảo mật',
    content: 'Chúng tôi cam kết bảo vệ thông tin của bạn bằng các tiêu chuẩn mã hóa cao nhất hiện nay.'
  },
  {
    id: 3,
    label: 'Hủy bỏ',
    content: 'Bạn có thể xuất dữ liệu và đóng tài khoản bất cứ lúc nào mà không gặp trở ngại.'
  }
]

export const LIMIT: { id: number, area: string, res: string }[] = [
  {
    id: 1,
    area: 'Gián đoạn dịch vụ',
    res: 'Chúng tôi không chịu trách nhiệm cho bất kỳ tổn thất nào phát sinh từ việc bảo trì định kỳ hoặc sự cố kỹ thuật ngoài tầm kiểm soát.'
  },
  {
    id: 2,
    area: 'Mất mát dữ liệu',
    res: 'Dù chúng tôi thực hiện sao lưu hàng ngày, người dùng được khuyến khích tự thực hiện các bản sao lưu quan trọng.'
  },
  {
    id: 3,
    area: 'Thiệt hại gián tiếp',
    res: 'Trong mọi trường hợp, TaskFlow Pro không chịu trách nhiệm cho các thiệt hại về lợi nhuận hoặc dữ liệu gián tiếp.'
  }
]
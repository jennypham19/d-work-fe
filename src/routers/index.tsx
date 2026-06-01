// Pages
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import Loadable from '@/components/Loadable';
import PublicRoute from '@/components/PublicRoute';

import AuthLayout from '@/layouts/Auth/AuthLayout';
import DashboardLayout from '@/layouts/Dashboard';
import ChangePassword from '@/views/Auth/ChangePassword';
import ForgotPassword from '@/views/Auth/ForgotPassword';
import Login from '@/views/Auth/Login';
import Registration from '@/views/Auth/Registration';
import { ROUTE_PATH } from '@/constants/routes';
import AuthGuard from '@/components/AuthGuard';

// Home
const Home = Loadable(lazy(() => import('@/views/Home')));

// Error
const NotFound = Loadable(lazy(() => import('@/views/Errors/NotFound')));
const PermissionDenied = Loadable(lazy(() => import('@/views/Errors/PermissionDenied')));

// Auth

const routes: RouteObject[] = [
  // --- NHÁNH 1: CÁC TRANG ĐƯỢC BẢO VỆ (PRIVATE) ---
  {
    path: ROUTE_PATH.MANAGE,
    element: <AuthGuard/>,
    children: [
      {
        element: <DashboardLayout/>,
        children: [
          {
            index: true,
            element: <Home />
          }
        ]
      }
    ],
  },

  // chỉ để xử lý trường hợp truy cập vào root path, sẽ tự động chuyển hướng đến trang đăng nhập
  // {
  //   path: '/',
  //   element: <Navigate to="login" replace />,
  // },

  // --- NHÁNH 2: CÁC TRANG XÁC THỰC (CHỈ DÀNH CHO NGƯỜI CHƯA ĐĂNG NHẬP) ---
  {
    path: '/',
    element: <PublicRoute/>,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { index: true, element: <Navigate to={ROUTE_PATH.LOGIN} replace /> },
          { path: ROUTE_PATH.LOGIN, element: <Login /> },
          { path: ROUTE_PATH.REGISTRATION, element: <Registration /> },
          { path: ROUTE_PATH.FORGOT_PASSWORD, element: <ForgotPassword /> },
          { path: ROUTE_PATH.CHANGE_PASSWORD, element: <ChangePassword /> },
        ],
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/403',
    element: <PermissionDenied />,
  },
];

const Routers = () => {
  const element = useRoutes(routes);
  return element;
};

export default Routers;

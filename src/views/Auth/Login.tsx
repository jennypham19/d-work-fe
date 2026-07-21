import { yupResolver } from '@hookform/resolvers/yup';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Box,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import ControllerTextField from '@/components/ControllerField/ControllerTextField';
import Page from '@/components/Page';

import { ROUTE_PATH } from '@/constants/routes';
import useBoolean from '@/hooks/useBoolean';
import useNotification from '@/hooks/useNotification';
import { loginSchema } from '@/schemas/auth-schema';
import { signIn } from '@/services/auth-service';
import { setIsAuth } from '@/slices/auth';
import { setProfile } from '@/slices/user';
import { useAppDispatch } from '@/store';
import { setAccessToken } from '@/utils/AuthHelper';
import Logger from '@/utils/Logger';
import { COLORS } from '@/constants/colors';
import useBreakpoints from '@/hooks/useBreakpoints';
import LoginMobile from '@/layouts/Breakpoints/Mobile/LoginMobile';
import LoginDesktop from '@/layouts/Breakpoints/Desktop/LoginDesktop';

export interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });
  const bp = useBreakpoints('lg');
  const { t } = useTranslation('auth');
  const [_loading, setLoading] = useBoolean();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const notify = useNotification();
  const [_error, setError] = useState('');
  const [showPassword, setShowPassword] = useBoolean(false);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onSubmit = async (values: LoginFormInputs) => {
    setLoading.on();
    try {
      const respAuth = await signIn({
        email: values.email,
        password: values.password,
      });
      const accessToken = respAuth.data?.accessToken;
      const userProfile = respAuth.data?.user; 
      if (accessToken && userProfile) {
        setAccessToken(accessToken);
        // Cập nhật state của Redux/Context
        // Thông tin user đã có sẵn từ response login, không cần gọi /me nữa
        dispatch(setProfile(userProfile));
        dispatch(setIsAuth(true));
        // Thông báo & chuyển hướng
        notify({
          message: t('login_success'),
          severity: 'success',
        });
        navigate(ROUTE_PATH.MANAGE, { replace: true});
      } else {
        notify({
          message: respAuth.message || 'Login failed, no access token returned.',
          severity: 'error'
        });
      }
    } catch (error: any) {
      setError(error)
      Logger.log(error);
    } finally {
      setLoading.off();
    }
  };

  return (
    <Page title='D-Work Đăng nhập'>
      {bp ? (
        <LoginMobile 
          route={ROUTE_PATH.REGISTRATION} 
          loading={_loading} 
          remember={remember} 
          onRememberChange={setRemember} 
          onToggle={() => setShowPassword.toggle()} 
          showPassword={showPassword} 
          control={control} 
          onSubmit={onSubmit} 
          errors={errors} 
          handleSubmit={handleSubmit}
        />
      ) : (
        <LoginDesktop 
          route={ROUTE_PATH.REGISTRATION} 
          loading={_loading} 
          remember={remember} 
          onRememberChange={setRemember} 
          onToggle={() => setShowPassword.toggle()} 
          showPassword={showPassword} 
          control={control} 
          onSubmit={onSubmit} 
          errors={errors} 
          handleSubmit={handleSubmit} 
        />
      )}    
      {/* <Box>
        <Typography
          component='h1'
          variant='h4'
          fontWeight={500}
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          Đăng nhập tài khoản
        </Typography>
        <Typography fontWeight={400}>Chào mừng bạn đến với D.Work</Typography>
      </Box>
      {_error && (
        <Alert variant='filled' severity='warning'>
          {_error}
        </Alert>
      )} */}
      {/* <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 2,
        }}
      >
        <ControllerTextField<LoginFormInputs>
          controllerProps={{
            name: 'email',
            defaultValue: '',
            control: control,
          }}
          textFieldProps={{
            label: 'Email',
            error: !!errors.email,
            helperText: errors.email?.message,
            sx: { ariaLabel: 'email' },
            placeholder:'Nhập nội dung...'
          }}
          prefixIcon={Email}
        />
        <ControllerTextField<LoginFormInputs>
          controllerProps={{
            name: 'password',
            defaultValue: '',
            control: control,
          }}
          textFieldProps={{
            label: 'Password',
            type: showPassword ? 'text' : 'password',
            error: !!errors.password,
            helperText: errors.password?.message,
            placeholder:'Nhập nội dung...',
            slotProps: {
              input: {
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPassword.toggle()}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            },
          }}
          prefixIcon={Lock}
        />
        <div>
          <Box>
            <Typography
              color='primary'
              component={RouterLink}
              to={`/${ROUTE_PATH.FORGOT_PASSWORD}`}
              sx={{ textAlign: 'end', display: 'block', color: 'red' }}
            >
              Quên mật khẩu?
            </Typography>
          </Box>
        </div>
        <LoadingButton 
          loading={_loading} type='submit' variant='outlined' 
          sx={{ 
            border: `1px solid ${COLORS.BASE}`, color: COLORS.BASE,
            "&:hover": {
              bgcolor: COLORS.BASE,
              color: '#fff'
            }
          }} fullWidth
        >
          Đăng nhập
        </LoadingButton>
      </Box> */}
    </Page>
  );
}

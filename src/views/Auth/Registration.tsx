import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Email, Lock } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Typography } from '@mui/material';
import ControllerTextField from '@/components/ControllerField/ControllerTextField';
import Page from '@/components/Page';

import { ROUTE_PATH } from '@/constants/routes';
import useBoolean from '@/hooks/useBoolean';
import useNotification from '@/hooks/useNotification';
import { registrationSchema } from '@/schemas/auth-schema';
import { signUp } from '@/services/auth-service';
import useBreakpoints from '@/hooks/useBreakpoints';
import RegisterMobile from '@/layouts/Breakpoints/Mobile/RegisterMobile';
import RegisterDesktop from '@/layouts/Breakpoints/Desktop/RegisterDesktop';

export interface RegistrationFormInputs {
  fullName: string
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Registration() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    setFocus,
    trigger,
  } = useForm<RegistrationFormInputs>({
    resolver: yupResolver(registrationSchema),
  });
  const bp = useBreakpoints('lg');
  const password = watch('password');
  const [_loading, setLoading] = useBoolean();
  const navigate = useNavigate();
  const notify = useNotification();
  const { t } = useTranslation('auth');
  const [_error, setError] = useState('');
  const [showPassword, setShowPassword] = useBoolean(false);
  const [showConfirmPassword, setShowConfirmPassword] = useBoolean(false);
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  useEffect(() => {
    if (password && password?.length === getValues('confirmPassword')?.length) {
      trigger('confirmPassword');
    }
  }, [password, trigger]);

  const onSubmit = async (values: RegistrationFormInputs) => {
    setLoading.on();
    try {
      await signUp(values);
      notify({
        message: t('registration_success'),
        severity: 'success',
      });
      navigate('/');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading.off();
    }
  };

  return (
    <Page title='D-Work Đăng ký'>
      {bp ? (
        <RegisterMobile 
          route='/' 
          onSubmit={onSubmit} 
          handleSubmit={handleSubmit} 
          loading={_loading} 
          errors={errors} 
          control={control} 
          onToggle={() => setShowPassword.toggle()}
          showPassword={showPassword}
          onToggleConfirmPassword={() => setShowConfirmPassword.toggle()}
          showConfirmPassword={showConfirmPassword}
          agree={agree}
          onAgreeChange={setAgree}
        />
      ) : (
        <RegisterDesktop 
          route='/' 
          onSubmit={onSubmit} 
          handleSubmit={handleSubmit} 
          loading={_loading} 
          errors={errors} 
          control={control} 
          onToggle={() => setShowPassword.toggle()}
          showPassword={showPassword}
          onToggleConfirmPassword={() => setShowConfirmPassword.toggle()}
          showConfirmPassword={showConfirmPassword}
          agree={agree}
          onAgreeChange={setAgree}
        />
      )} 
    </Page>
  );
}

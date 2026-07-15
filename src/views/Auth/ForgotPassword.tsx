import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { object } from 'yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Email } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Typography } from '@mui/material';
import ControllerTextField from '@/components/ControllerField/ControllerTextField';
import Page from '@/components/Page';

import { ROUTE_PATH } from '@/constants/routes';
import useBoolean from '@/hooks/useBoolean';
import { emailValidateSchema } from '@/schemas/auth-schema';
import { verifyEmail } from '@/services/auth-service';
import { COLORS } from '@/constants/colors';

const forgotPasswordSchema = object().shape({
  username: emailValidateSchema,
});

type ForgotPasswordFormInputs = {
  username: string;
};
export default function ForgotPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<ForgotPasswordFormInputs>({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const [_loading, setLoading] = useBoolean(false);
  const navigate = useNavigate();
  const [_hasErrors, setHasErrors] = useState<boolean | undefined>(undefined);
  const [_errorMsg, setErrorMsg] = useState('');
  const { t } = useTranslation('auth');

  useEffect(() => {
    setFocus('username');
  }, [setFocus]);

  const onSubmit = async (values: ForgotPasswordFormInputs) => {
    setLoading.on();
    try {
      const resp = await verifyEmail(values);
      if (resp.statusCode === axios.HttpStatusCode.Ok) {
        setHasErrors(false);
        setErrorMsg('');
      } else {
        setErrorMsg(t('email_not_found'));
        throw new Error(resp.message);
      }
    } catch (error: any) {
      setHasErrors(true);
    } finally {
      setLoading.off();
    }
  };

  return (
    <Page title='D.Work Quên mật khẩu'>
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{ maxWidth: 400, margin: 'auto' }}
      >
        <Typography variant='h4' component='h1' fontWeight={500} gutterBottom>
          Quên mật khẩu
        </Typography>
        <Typography variant='body1' fontWeight={400} sx={{ mb: 2 }}>
          Nhập địa chỉ email của bạn và chúng tôi sẽ gửi mã xác nhận cho bạn
        </Typography>

        {_hasErrors === true && (
          <Alert variant='filled' severity='warning'>
            {_errorMsg}
          </Alert>
        )}

        {_hasErrors === false && (
          <Alert variant='filled' severity='success'>
            Sent password reset. Please check your email
          </Alert>
        )}

        <ControllerTextField<ForgotPasswordFormInputs>
          controllerProps={{
            name: 'username',
            defaultValue: '',
            control: control,
          }}
          textFieldProps={{
            label: 'Email',
            error: !!errors.username,
            helperText: errors.username?.message,
          }}
          prefixIcon={Email}
        />
        <LoadingButton
          loading={_loading}
          type='submit'
          variant='contained'
          fullWidth
          sx={{ mt: 2, bgcolor: COLORS.BASE }}
        >
          Gửi
        </LoadingButton>
        <Button
          onClick={() => navigate(`/`)}
          variant='outlined'
          fullWidth
          sx={{ mt: 2 }}
        >
          Quay lại đăng nhập
        </Button>
      </Box>
    </Page>
  );
}

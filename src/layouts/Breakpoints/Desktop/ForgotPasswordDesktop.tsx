import { ForgotPasswordFormInputs } from "@/views/Auth/ForgotPassword";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2"
import { COLORS } from "@/constants/colors";
import FeatureLayout from "@/views/components/FeatureLayout";
import ControllerTextField from "@/components/ControllerField/ControllerTextField";
import { Email } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from 'react-router-dom';

interface ForgotPasswordDesktopProps{
    onSubmit: (values: ForgotPasswordFormInputs) => Promise<void>;
    errors: any;
    handleSubmit: any;
    control: any;
    loading: boolean;
    route: string; 
}

const ForgotPasswordDesktop: React.FC<ForgotPasswordDesktopProps> = (props) => {
    const { onSubmit, errors, handleSubmit, control, loading, route} = props;
    return(
        <Grid container spacing={2}height='100%'>
            {/* Feature Cards */}
            <Grid
                size={{ xs: 7 }}
                sx={{
                    bgcolor: COLORS.PRIMARY,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column', pl: 15
                }}
            >
                <FeatureLayout/>
            </Grid>

            {/* Forgot Password Form */}
            <Grid size={{ xs: 5 }} sx={{ p: 10, gap: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography
                    component='h1'
                    variant='h4'
                    fontWeight={500}
                    sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                >
                    Quên mật khẩu
                </Typography>
                <Typography fontWeight={400}>
                    Nhập email của bạn và chúng tôi sẽ hướng dẫn khôi phục mật khẩu
                </Typography>
                <Box
                    component='form'
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                        mt: 3
                    }}
                >
                    <Box>
                        <Typography>Địa chỉ Email</Typography>
                        <ControllerTextField<ForgotPasswordFormInputs>
                            controllerProps={{
                                name: 'email',
                                defaultValue: '',
                                control: control,
                            }} 
                            textFieldProps={{
                                label: '',
                                error: !!errors.email,
                                helperText: errors.email?.message,
                                sx: { ariaLabel: 'email' },
                                placeholder:'Email của bạn',
                                margin: 'dense'
                            }}
                            prefixIcon={Email}   
                        /> 
                    </Box>
                    <LoadingButton 
                        loading={loading} type='submit' variant='contained' 
                        sx={{ 
                            border: `1px solid ${COLORS.PRIMARY}`, color: "#fff",
                            "&:hover": {
                                bgcolor: COLORS.PRIMARY,
                                color: '#fff'
                            }
                        }} fullWidth
                    >
                        Gửi mã xác nhận
                    </LoadingButton>
                </Box>
                <Stack direction="row" display='flex' gap={1} mt={2} justifyContent='center' alignItems='center'>
                    <Typography
                        component={RouterLink}
                        to={route}
                        color="primary"
                        sx={{
                            textDecoration: 'none',
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: COLORS.BASE
                        }}
                    >
                        Quay lại trang đăng nhập
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default ForgotPasswordDesktop;
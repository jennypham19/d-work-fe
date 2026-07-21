import { ForgotPasswordFormInputs } from "@/views/Auth/ForgotPassword";
import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { CheckCircleOutline, Email, Menu } from "@mui/icons-material";
import ToggleLayout from "@/views/components/ToggleLayout";
import { COLORS } from "@/constants/colors";
import ControllerTextField from "@/components/ControllerField/ControllerTextField";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from 'react-router-dom';

interface ForgotPasswordMobileProps{
    onSubmit: (values: ForgotPasswordFormInputs) => Promise<void>;
    errors: any;
    handleSubmit: any;
    control: any;
    loading: boolean;
    route: string;    
}

const ForgotPasswordMobile: React.FC<ForgotPasswordMobileProps> = (props) => {
    const { onSubmit, errors, handleSubmit, control, loading, route } = props;
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <Grid container spacing={2} height='100%'>
            <Grid sx={{ flex: 1, p: 3, gap: 1, display: 'flex', flexDirection: 'column' }}>
                <IconButton
                    sx={{
                        borderRadius: 3,
                        bgcolor: '#dcdddf',
                        width: 50,
                        height: 40,
                    }}
                    onClick={() => setToggleMenu(true)}                                    
                >
                    <Menu/>
                </IconButton>
                <Drawer
                    anchor="left"
                    open={toggleMenu}
                    onClose={() => setToggleMenu(false)}
                >
                    <Box
                        sx={{
                            width: '100vw',
                            height: '100%',
                        }}
                    >
                        <ToggleLayout onClose={() => setToggleMenu(false)} />
                    </Box>
                </Drawer> 
                <Stack mb={2} direction='row' spacing={1} alignItems='center' justifyContent='center' sx={{ mt: 5 }}>
                    <IconButton 
                        sx={{ 
                            bgcolor: COLORS.PRIMARY, color: '#fff', p: 1, 
                            borderRadius: 2, width: 35, height: 35
                        }}
                    >
                        <CheckCircleOutline/>  
                    </IconButton>
                    <Typography fontWeight={500} variant="h5" sx={{ color: COLORS.PRIMARY }}>
                        D.Work
                    </Typography>
                </Stack>
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

export default ForgotPasswordMobile;
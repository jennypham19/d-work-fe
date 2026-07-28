import { RegistrationFormInputs } from "@/views/Auth/Registration";
import { Box, Checkbox, Divider, Drawer, FormControlLabel, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import ToggleLayout from "@/views/components/ToggleLayout";
import { CheckCircleOutline, Email, GitHub, Google, Lock, Menu, Microsoft, Person, Visibility, VisibilityOff } from "@mui/icons-material";
import { COLORS } from "@/constants/colors";
import ControllerTextField from "@/components/ControllerField/ControllerTextField";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from 'react-router-dom';
import TermOfService from "@/views/Auth/TermOfService";
import PrivacyPolicy from "@/views/Auth/PrivacyPolicy";

interface RegisterMobileProps{
    onSubmit: (values: RegistrationFormInputs) => Promise<void>;
    errors: any;
    handleSubmit: any;
    control: any;
    showPassword: boolean;
    onToggle: () => void;
    showConfirmPassword: boolean;
    onToggleConfirmPassword: () => void
    loading: boolean;
    route: string;
    agree: boolean;
    onAgreeChange: (value: boolean) => void;
    onOpenDialogAndType: (type: string) => void;
    onCloseOpenDialogAndType: (type: string) => void;
    openDialogAndType: { open: boolean, type: string }
}

const RegisterMobile = (props: RegisterMobileProps) => {
    const { 
        agree, onAgreeChange, onSubmit, errors, 
        handleSubmit, control, showPassword, 
        onToggle, showConfirmPassword, 
        onToggleConfirmPassword, loading, 
        route, onOpenDialogAndType, onCloseOpenDialogAndType, openDialogAndType
    } = props;
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <>
            {!openDialogAndType.open && (
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
                            Chào mừng trở lại
                        </Typography>
                        <Typography fontWeight={400}>Đăng nhập để tiếp tục quản lý công việc của bạn</Typography>
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
                                <Typography>Họ tên</Typography>
                                <ControllerTextField<RegistrationFormInputs>
                                    controllerProps={{
                                        name: 'fullName',
                                        defaultValue: '',
                                        control: control,
                                    }} 
                                    textFieldProps={{
                                        label: '',
                                        error: !!errors.fullName,
                                        helperText: errors.fullName?.message,
                                        sx: { ariaLabel: 'fullName' },
                                        placeholder:'Họ tên của bạn',
                                        margin: 'dense'
                                    }}
                                    prefixIcon={Person}   
                                />                        
                            </Box>
                            <Box>
                                <Typography>Email</Typography>
                                <ControllerTextField<RegistrationFormInputs>
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
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 12 }}>
                                    <Typography>Mật khẩu</Typography>
                                    <ControllerTextField<RegistrationFormInputs>
                                        controllerProps={{
                                            name: 'password',
                                            defaultValue: '',
                                            control: control,
                                        }}    
                                        textFieldProps={{
                                            label: '',
                                            type: showPassword ? 'text' : 'password',
                                            error: !!errors.password,
                                            helperText: errors.password?.message,
                                            placeholder:'Mật khẩu',
                                            margin: 'dense',
                                            slotProps: {
                                                input: {
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={onToggle}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }
                                            }
                                        }}
                                        prefixIcon={Lock}
                                    />                            
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Typography>Mật khẩu xác nhận</Typography>
                                    <ControllerTextField<RegistrationFormInputs>
                                        controllerProps={{
                                            name: 'confirmPassword',
                                            defaultValue: '',
                                            control: control,
                                        }}    
                                        textFieldProps={{
                                            label: '',
                                            type: showConfirmPassword ? 'text' : 'password',
                                            error: !!errors.confirmPassword,
                                            helperText: errors.confirmPassword?.message,
                                            placeholder:'Mật khẩu xác nhận',
                                            margin: 'dense',
                                            slotProps: {
                                                input: {
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle confirmPassword visibility"
                                                                onClick={onToggleConfirmPassword}
                                                                edge="end"
                                                            >
                                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }
                                            }
                                        }}
                                        prefixIcon={Lock}
                                    />
                                </Grid>
                            </Grid>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={agree}
                                        onChange={(e) => onAgreeChange(e.target.checked)}
                                    />
                                }
                                label={
                                    <>
                                    Tôi đồng ý với{" "} 
                                    {<a style={{ color: COLORS.BASE }} onClick={() => onOpenDialogAndType('term-of-service')}>Điều khoản dịch vụ</a>}{" "} và{" "} 
                                    {<a style={{ color: COLORS.BASE }} onClick={() => onOpenDialogAndType('privacy-policy')}>Chính sách bảo mật</a>}
                                    </>
                                }
                            />
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
                                Đăng ký
                            </LoadingButton>
                        </Box>
                        <Stack mt={2} direction="row" display='flex' gap={2}>
                            <Divider sx={{ flex: 1, margin: 'auto 0' }} />
                            <Typography fontSize={14} color='text.secondary'>HOẶC</Typography>
                            <Divider sx={{ flex: 1, margin: 'auto 0' }} />
                        </Stack>
                        <Grid sx={{ mt: 2 }} container spacing={2}>
                            <Grid sx={{ flex: 1 }}>
                                <Box sx={{ px: 2, py: 1, flex: 1, border: `1px solid ${COLORS.GRAY}`, borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                                    <GitHub sx={{ width: 15, height: 15 }} />
                                    <Typography variant="body2">GitHub</Typography>
                                </Box>
                            </Grid>
                            <Grid sx={{ flex: 1 }}>
                                <Box sx={{ px: 2, py: 1, flex: 1, border: `1px solid ${COLORS.GRAY}`, borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                                    <Google sx={{ width: 15, height: 15 }} />
                                    <Typography variant="body2">Google</Typography>
                                </Box>
                            </Grid>
                            <Grid sx={{ flex: 1 }}>
                                <Box sx={{ px: 2, py: 1, flex: 1, border: `1px solid ${COLORS.GRAY}`, borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                                    <Microsoft sx={{ width: 15, height: 15 }} />
                                    <Typography variant="body2">Microsoft</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Stack direction="row" display='flex' gap={1} mt={2} justifyContent='center' alignItems='center'>
                            <Typography fontSize={15} color='text.secondary'>Đã có tài khoản?</Typography>
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
                                Đăng nhập ngay
                            </Typography>
                        </Stack>
                    </Grid>

                </Grid>
            )}
            {openDialogAndType.open && openDialogAndType.type === 'term-of-service' && (
                <TermOfService
                    onCloseOpenDialogAndType={onCloseOpenDialogAndType}
                />
            )}
            {openDialogAndType.open && openDialogAndType.type === 'privacy-policy' && (
                <PrivacyPolicy/>
            )}        
        </>
    )
}

export default RegisterMobile;
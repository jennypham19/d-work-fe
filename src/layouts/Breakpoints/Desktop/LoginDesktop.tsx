import ControllerTextField from "@/components/ControllerField/ControllerTextField";
import { COLORS } from "@/constants/colors";
import { LoginFormInputs } from "@/views/Auth/Login";
import FeatureLayout from "@/views/components/FeatureLayout";
import { Email, GitHub, Google, Lock, Microsoft, Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Checkbox, Divider, FormControlLabel, IconButton, InputAdornment, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link as RouterLink } from 'react-router-dom';

interface LoginDesktopProps {
    onSubmit: (values: LoginFormInputs) => Promise<void>;
    errors: any;
    handleSubmit: any;
    control: any;
    showPassword: boolean;
    onToggle: () => void;
    remember: boolean;
    onRememberChange: (value: boolean) => void;
    loading: boolean;
    route: string;
}

const LoginDesktop: React.FC<LoginDesktopProps> = (props) => {
    const { route, loading, onSubmit, errors, handleSubmit, control, showPassword, onToggle, remember, onRememberChange } = props;
    return(
        <Grid container spacing={2}height='100%'>
            {/* Feature Cards */}
            <Grid 
                size={{ md: 7 }}
                sx={{
                    bgcolor: COLORS.PRIMARY,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    pl: 15
                }}
            >
                <FeatureLayout/>
            </Grid>

            {/* Login Form */}
            <Grid size={{ md: 5 }} sx={{ p: 10, gap: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                        <Typography>Email</Typography>
                        <ControllerTextField<LoginFormInputs>
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
                    <Box>
                        <Typography>Mật khẩu</Typography>
                        <ControllerTextField<LoginFormInputs>
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
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 1,
                        }}
                        >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={remember}
                                    onChange={(e) => onRememberChange(e.target.checked)}
                                />
                            }
                            label="Ghi nhớ đăng nhập"
                        />

                        <Typography
                            component={RouterLink}
                            to="/forgot-password"
                            color="primary"
                            sx={{
                                textDecoration: 'none',
                                fontSize: 16,
                            }}
                        >
                            Quên mật khẩu?
                        </Typography>
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
                        Đăng nhập
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
                            <GitHub sx={{ width: 20, height: 20 }} />
                            <Typography variant="body2">GitHub</Typography>
                        </Box>
                    </Grid>
                    <Grid sx={{ flex: 1 }}>
                        <Box sx={{ px: 2, py: 1, flex: 1, border: `1px solid ${COLORS.GRAY}`, borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                            <Google sx={{ width: 20, height: 20 }} />
                            <Typography variant="body2">Google</Typography>
                        </Box>
                    </Grid>
                    <Grid sx={{ flex: 1 }}>
                        <Box sx={{ px: 2, py: 1, flex: 1, border: `1px solid ${COLORS.GRAY}`, borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                            <Microsoft sx={{ width: 20, height: 20 }} />
                            <Typography variant="body2">Microsoft</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Stack direction="row" display='flex' gap={1} mt={2} justifyContent='center' alignItems='center'>
                    <Typography fontSize={15} color='text.secondary'>Bạn chưa có tài khoản?</Typography>
                    <Typography
                        component={RouterLink}
                        to={route}
                        color="primary"
                        sx={{
                            textDecoration: 'none',
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}
                    >
                        Đăng ký ngay
                    </Typography>
                </Stack>
            </Grid>
            
        </Grid>
    )
}

export default LoginDesktop;
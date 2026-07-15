import { COLORS } from '@/constants/colors';
import { DATA_DETAIL } from '@/constants/data';
import { CheckCircleOutline, Close } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FeatureCard from './FeatureCard';

interface ToggleLayoutProps {
    onClose: () => void;
}

const ToggleLayout: React.FC<ToggleLayoutProps> = ({ onClose }) => {
    return (
        <Grid container spacing={2} height='100%' width='100%'>
            {/* Feature Cards */}
            <Grid 
                sx={{
                    bgcolor: COLORS.PRIMARY,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    pl: 2
                }}
            >
                <Stack m={1} direction='row' justifyContent='flex-end'>
                    <IconButton
                        sx={{
                            bgcolor: 'white', color: COLORS.PRIMARY, p: 1,
                        }}
                        onClick={onClose}
                    >
                        <Close/>
                    </IconButton>
                </Stack>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <IconButton 
                        sx={{ 
                            bgcolor: 'white', color: COLORS.PRIMARY, p: 1, 
                            borderRadius: 2, width: 40, height: 40
                        }}
                    >
                        <CheckCircleOutline sx={{ width: 30, height: 30 }}/>  
                    </IconButton>
                    <Typography fontWeight={500} variant="h4" sx={{ color: 'white' }}>
                        D.Work
                    </Typography>
                </Stack>
                <Typography mt={2} fontWeight={400} sx={{ color: 'white', mb: 5 }}>Quản lý công việc thông minh, hiệu quả hơn</Typography>
                <Grid sx={{ ml: 5}} container spacing={1}>
                    <Grid sx={{ width: { xs: '75%', sm: '80%' }}}>
                        {DATA_DETAIL.map((item) => (
                            <FeatureCard
                                label={item.name}
                                icon={item.icon}
                                id={item.id}
                                key={item.id}
                                top={item.top}
                                left={item.left}
                                delay={item.delay} 
                                y={item.y} 
                                align={item.align}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ToggleLayout;
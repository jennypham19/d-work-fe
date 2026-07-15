import { COLORS } from "@/constants/colors";
import { DATA_DETAIL } from "@/constants/data";
import { CheckCircleOutline } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "./FeatureCard";
const FeatureLayout = () => {
    return (
        <>
            <Stack direction='row' spacing={1} alignItems='center'>
                <IconButton 
                    sx={{ 
                        bgcolor: 'white', color: COLORS.PRIMARY, p: 1, 
                        borderRadius: 2, width: 56, height: 56
                    }}
                >
                    <CheckCircleOutline sx={{ width: 40, height: 40 }}/>  
                </IconButton>
                <Typography fontWeight={500} variant="h2" sx={{ color: 'white' }}>
                    D.Work
                </Typography>
            </Stack>
            <Typography fontWeight={400} sx={{ color: 'white', mb: 5 }}>Quản lý công việc thông minh, hiệu quả hơn</Typography>
            <Grid sx={{ ml: 5}} container spacing={1}>
                <Grid size={{ xs: 4, md: 8 }}>
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
        </>
    )
}

export default FeatureLayout;
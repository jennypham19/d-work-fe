import { SvgIconComponent } from "@mui/icons-material";
import { IconButton, Paper, Typography } from "@mui/material";
import { motion } from "motion/react"

const MotionPaper = motion.create(Paper);

interface Props {
    label: string;
    icon: SvgIconComponent;
    id: number;
    top: number;
    left: number;
    delay: number;
    y: number[];
    align: string;
}

export default function FeatureCard({label, icon: Icon, id, top, left, delay, y, align }: Props) {
    return (
        <MotionPaper
            key={id}
            initial={{ opacity: 0, y: 40, x: align === 'left' ? -40 : 40 }}
            animate={{ opacity: 1, y: y }}
            transition={{
                opacity: {
                    duration: 0.8,
                    delay
                },
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay
                }
            }}
            whileHover={{
                scale: 1.05,
                y: -15
            }}
            sx={{
                p: { xs: 2, md: 3},
                top,
                left,
                borderRadius: 3,
                backdropFilter: "blur(10px)",
                display: 'flex',
                flexDirection: 'row',
                gap: 3,
                bgcolor: '#C3C0FF',
                my: 2,
                border: `1px solid gray`
            }}
        >
            <IconButton sx={{ bgcolor: 'gray'}}>
                <Icon />
            </IconButton>
                            
            <Typography fontWeight={500} sx={{ margin: 'auto 0' }}>
                {label}
            </Typography>
        </MotionPaper>
    )
}
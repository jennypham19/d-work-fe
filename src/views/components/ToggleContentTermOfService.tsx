import { COLORS } from "@/constants/colors";
import { MENUS } from "@/constants/data";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";

interface ToggleContentTermOfServiceProps {
    onClose: () => void;
    active: string;
    onScroll: (id: any) => void;
}

const ToggleContentTermOfService = (props: ToggleContentTermOfServiceProps) => {
    const { onClose, active, onScroll } = props;
    return(
        <Box sx={{ width: 280, p: 1.5 }} role="presentation" onClick={onClose}>
            <Typography
                variant="h6"
                fontWeight={600}
            >
                Nội dung chính
            </Typography>
            <List>
                {MENUS.map((item) => {
                    const Icon = item.icon
                    return (
                        <ListItemButton
                            key={item.id}
                            selected={active === item.id}
                            onClick={() => onScroll(item.id)}
                            sx={{
                                color: active === item.id ? COLORS.PRIMARY : '#000',
                                bgcolor: active === item.id ? COLORS.BASE : 'transparent',
                                borderRadius: active === item.id ? 2 : 0,
                                borderLeft: active === item.id ? `3px solid ${COLORS.BASE}` : 'none'
                            }}
                        >
                            <Stack gap={1} direction='row'>
                                {Icon && <Icon fontSize="small" sx={{ margin: 'auto 0'}}/>}
                                <ListItemText sx={{ fontSize: 12 }} primary={item.label} />
                            </Stack>
                        </ListItemButton>
                    )
                }
                )}
            </List>
        </Box>
    )
}

export default ToggleContentTermOfService;
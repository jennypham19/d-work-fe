import IconButton from "@/components/IconButton/IconButton";
import { COLORS } from "@/constants/colors";
import { LIMIT, MENUS, SUMMARY } from "@/constants/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ToggleContentTermOfService from "@/views/components/ToggleContentTermOfService";
import { CheckCircle, ContentPaste, Help, HelpCenter, HelpOutline, InfoOutlined, Menu, SecurityOutlined } from "@mui/icons-material";
import { Box, Button, Divider, Drawer, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { useState } from "react";
interface TermOfServiceMobileProps{

}

const TermOfServiceMobile = (props: TermOfServiceMobileProps) => {
    const { } = props;
    const [toggleMenu, setToggleMenu] = useState(false);
    const {
        activeId,
        containerRef,
        register,
        scrollTo,
    } = useScrollSpy({
        ids: MENUS.map((x) => x.id),
    });
    return(
        <Grid container spacing={2} height='100%'>
            <Grid sx={{ flex: 1, p: 1.5, gap: 1 }}>
                <IconButton
                    handleFunt={() => setToggleMenu(true)}
                    icon={<Menu/>}
                    backgroundColor= '#dcdddf'
                    sx={{
                        borderRadius: 5,
                        bgcolor: '#dcdddf',
                        width: 50,
                        height: 35,
                    }}
                />
                <Drawer
                    anchor="left"
                    open={toggleMenu}
                    onClose={() => setToggleMenu(false)}
                >
                    <ToggleContentTermOfService 
                        onClose={() => setToggleMenu(false)}
                        active={activeId}
                        onScroll={scrollTo}
                    />
                </Drawer>
                <Paper elevation={2} sx={{ p: 1.5, mt: 2, borderRadius: 2, border: '1px solid #c0bebe'}}>
                    <Typography
                        variant="h6"
                        fontWeight={600}
                    >
                        Điều khoản Dịch vụ
                    </Typography>
                    <Typography
                        variant="subtitle2"
                    >
                        Cập nhật lần cuối: Ngày 24 tháng 5, 2024
                    </Typography>
                    <Divider sx={{ border: `1px solid ${COLORS.BASE}`, my: 1 }}/>
                    <Box
                        ref={containerRef}
                        sx={{
                            overflowY: "auto",
                            height: "100%",
                        }}
                    >
                        <Box
                            id="summary"
                            ref={register("summary")}
                            sx={{
                                scrollMarginTop: 80,
                            }}
                        >
                            {/* Summary - Tóm tắt nhanh */}
                            <Paper sx={{ mt: 3, bgcolor: '#E2DFFF', p: 2, borderLeft: `3px solid ${COLORS.BASE}` }}>
                                <Stack py={1} gap={1} direction='row'>
                                    <InfoOutlined fontSize="small" sx={{ color: COLORS.BASE }}/>
                                    <Typography sx={{ color: COLORS.BASE, fontWeight: 600 }}>Tóm tắt nhanh</Typography>
                                </Stack>
                                {SUMMARY.map((item) => (
                                    <Stack py={1} key={item.id} gap={1} direction='row'>
                                        <CheckCircle fontSize="small" color="success"/>
                                        <Typography variant="subtitle2" fontWeight={600}>{item.label}:</Typography>
                                        <Typography variant="subtitle2">{item.content}</Typography>
                                    </Stack>
                                ))}
                            </Paper>
                        </Box>

                        {/* Accept - Chấp nhận điều khoản */}
                        <Box
                            id="accept"
                            ref={register("accept")}
                            mt={5}
                        >
                            <Typography fontWeight={600}>1. {MENUS[1].label}</Typography>
                            <Divider sx={{ my: 1, border: `1px solid #e4e3e3` }}/>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary"
                                my={2}
                            >
                                Bằng việc truy cập hoặc sử dụng nền tảng D.Work, bạn đồng ý chịu sự ràng buộc bởi các Điều khoản Dịch vụ này cũng như Chính sách Quyền riêng tư của chúng tôi. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, bạn không được phép sử dụng dịch vụ của chúng tôi.
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary"
                            >
                                Chúng tôi có quyền sửa đổi hoặc thay thế các Điều khoản này bất kỳ lúc nào. Nếu một sửa đổi có tính chất quan trọng, chúng tôi sẽ cố gắng thông báo trước ít nhất 30 ngày trước khi bất kỳ điều khoản mới nào có hiệu lực.
                            </Typography>
                        </Box>

                        {/* User - Nghĩa vụ người dùng */}
                        <Box
                            id="user"
                            ref={register("user")}
                            mt={5}
                        >
                            <Typography fontWeight={600}>2. {MENUS[2].label}</Typography>
                            <Divider sx={{ my: 1, border: `1px solid #e4e3e3` }}/>

                            {/* Bảo mật tài khoản */}
                            <Box
                                sx={{
                                    borderRadius: 2,
                                    bgcolor: '#E2DFFF',
                                    p: 2,
                                    my: 1.5
                                }}
                            >
                                <Stack gap={1} direction='row'>
                                    <SecurityOutlined fontSize="small" sx={{ color: COLORS.BASE }}/>
                                    <Typography variant="subtitle2" fontWeight={500}>Bảo mật tài khoản</Typography>
                                </Stack>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    mt={1}
                                >
                                    Bạn có trách nhiệm bảo mật mật khẩu của mình và mọi hoạt động diễn ra dưới tài khoản của mình.
                                </Typography>
                            </Box>

                            {/* Nội dung hợp lệ */} 
                            <Box
                                sx={{
                                    borderRadius: 2,
                                    bgcolor: '#E2DFFF',
                                    p: 2,
                                    my: 1.5
                                }}
                            >
                                <Stack gap={1} direction='row'>
                                    <ContentPaste fontSize="small" sx={{ color: COLORS.BASE }}/>
                                    <Typography variant="subtitle2" fontWeight={500}>Nội dung hợp lệ</Typography>
                                </Stack>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    mt={1}
                                >
                                    Bạn không được đăng tải các nội dung vi phạm bản quyền hoặc mang tính chất lăng mạ, quấy rối.
                                </Typography>
                            </Box>                           
                        </Box>

                        {/* Copyright - Sở hữu trí tuệ */}
                        <Box
                            id="copyright"
                            ref={register("copyright")}
                            mt={5}
                        >
                            <Typography fontWeight={600}>3. {MENUS[3].label}</Typography>
                            <Divider sx={{ my: 1, border: `1px solid #e4e3e3` }}/>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary"
                                my={2}
                            >
                                Dịch vụ và các nội dung gốc (ngoại trừ Nội dung do người dùng cung cấp), các tính năng và chức năng là tài sản riêng của TaskFlow Pro và các bên cấp phép của nó. Dịch vụ được bảo hộ bởi luật bản quyền, thương hiệu và các luật khác của cả Việt Nam và nước ngoài.
                            </Typography>       
                        </Box>

                        {/* Limit - Giới hạn trách nhiệm */}
                        <Box
                            id="limit"
                            ref={register("limit")}
                            mt={5}
                        >
                            <Typography fontWeight={600}>4. {MENUS[4].label}</Typography>
                            <Divider sx={{ my: 1, border: `1px solid #e4e3e3` }}/> 
                            <Grid sx={{ mt: 2, bgcolor: '#E2DFFF', p: 1, borderRadius: 3 }} container spacing={2}>
                                <Grid size={{ xs: 2 }} sx={{ p: 0.5, px: 2 }}>
                                    <Typography variant="subtitle2" fontWeight={600}>Phạm vi</Typography>
                                </Grid>
                                <Grid size={{ xs: 10 }} sx={{ p: 0.5 }}>
                                    <Typography variant="subtitle2" fontWeight={600}>Giới hạn trách nhiệm của chúng tôi</Typography>
                                </Grid>
                            </Grid> 
                            {LIMIT.map((limit, index) => {
                                return(
                                    <Grid key={limit.id} container>
                                        <Grid size={{ xs: 2 }} sx={{ p: 2, borderBottom: LIMIT.length - 1 > index ? '1px solid #cccaca' : 'none' }}>
                                            <Typography variant="subtitle2" color="text.secondary">{limit.area}</Typography>
                                        </Grid>
                                        <Grid size={{ xs: 10 }} sx={{ p: 2, borderBottom: LIMIT.length - 1 > index ? '1px solid #cccaca' : 'none' }}>
                                            <Typography variant="subtitle2" color="text.secondary">{limit.res}</Typography>
                                        </Grid>
                                    </Grid>
                                )
                            })}                        
                        </Box>

                        {/* Terminate - Chấm dứt dịch vụ */}
                        <Box
                            id="terminate"
                            ref={register("terminate")}
                            mt={5}
                        >
                            <Typography fontWeight={600}>5. {MENUS[5].label}</Typography>
                            <Divider sx={{ my: 1, border: `1px solid #e4e3e3` }}/>  
                            <Typography
                                variant="subtitle2"
                                color="text.secondary"
                                my={2}
                            >
                                Chúng tôi có thể chấm dứt hoặc tạm đình chỉ quyền truy cập vào Dịch vụ của bạn ngay lập tức, mà không cần thông báo trước hoặc chịu trách nhiệm pháp lý, vì bất kỳ lý do gì, bao gồm nhưng không giới hạn ở việc bạn vi phạm các Điều khoản.
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ border: '1px solid #e4e3e3', my: 3 }}/>
                    <Stack>
                        <Typography fontWeight={600}>Bạn vẫn còn thắc mắc?</Typography>
                        <Typography variant="subtitle2" color="text.secondary">Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp 24/7.</Typography>
                    </Stack>
                    <Box mt={2} display='flex' justifyContent='space-between' gap={2}>
                        <Button
                            variant="outlined"
                            sx={{
                                border: `1px solid ${COLORS.BASE}`,
                                color: COLORS.BASE
                            }}
                            fullWidth
                            startIcon={<HelpCenter/>}
                        >
                            Trung tâm Trợ giúp
                        </Button>
                        <Button
                            fullWidth
                            sx={{
                                bgcolor: COLORS.BASE,
                                color: '#fff'
                            }}
                            startIcon={<HelpOutline/>}
                        >
                            Liên hệ Hỗ trợ
                        </Button>
                    </Box>                   
                </Paper>

            </Grid>
        </Grid>
    )
}

export default TermOfServiceMobile;
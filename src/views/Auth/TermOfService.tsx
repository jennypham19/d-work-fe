import NavigateBack from "@/components/NavigateBack";
import useBreakpoints from "@/hooks/useBreakpoints";
import TermOfServiceDesktop from "@/layouts/Breakpoints/Desktop/TermOfServiceDesktop";
import TermOfServiceMobile from "@/layouts/Breakpoints/Mobile/TermOfServiceMobile";
import { Box } from "@mui/material";
import { useState } from "react";

// TermOfService (Điều khoản dịch vụ)
interface TermOfServiceProps{
    onCloseOpenDialogAndType: (type: string) => void;
}

const TermOfService = (props: TermOfServiceProps) => {
    const { onCloseOpenDialogAndType } = props;
    const bp = useBreakpoints('lg');
    return(
        <Box>
            <NavigateBack
                title='Quay lại trang đăng ký'
                onBack={() => onCloseOpenDialogAndType('term-of-service')}
            />
            {bp ? (
                <TermOfServiceMobile

                />
            ) : (
                <TermOfServiceDesktop
                
                />
            )}
        </Box>
    )
}

export default TermOfService;
import { useMediaQuery, useTheme } from "@mui/material";


const useBreakpoints = (breakpoints: any) => {
    const theme = useTheme();
    const breakpointValues = useMediaQuery(theme.breakpoints.down(breakpoints));
    return breakpointValues;
}

export default useBreakpoints;
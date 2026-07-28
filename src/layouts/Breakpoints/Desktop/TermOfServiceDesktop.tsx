import Grid from "@mui/material/Grid2"
interface TermOfServiceDesktopProps{

}

const TermOfServiceDesktop = (props: TermOfServiceDesktopProps) => {
    const { } = props;
    return(
        <Grid container spacing={2} height='100%'>
            <Grid size={{ lg: 3 }} sx={{ p: 3 }}>
            </Grid>
            <Grid size={{ lg: 9 }} sx={{ p: 3 }}>
            </Grid>
        </Grid>
    )
}

export default TermOfServiceDesktop;
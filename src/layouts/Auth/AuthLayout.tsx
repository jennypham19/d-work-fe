import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const AuthContainer = styled(Box)(({ theme }) => ({
  minHeight: '100%',
  backgroundColor: '#fff',
  justifyContent: 'center',

}));

export default function AuthLayout() {
  const theme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          size: 'large',
        },
      },
    },
  });
  return (
    <AuthContainer justifyContent='space-between'>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </AuthContainer>
  );
}

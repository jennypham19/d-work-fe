import { createTheme, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import bg_auth from '@/assets/images/users/bg-auth.png'

const AuthContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100%',
  backgroundImage: `url(${bg_auth})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  alignItems: 'flex-end',
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
  },
  [theme.breakpoints.up('lg')]: {
    paddingRight: theme.spacing(20),
  }
  // width: '100%',
  // position: 'relative',
  // alignItems: 'center',
  // justifyContent: 'center',
  // overflow: 'hidden',
  // '&::before': {
  //   content: '""',
  //   position: 'fixed',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,

  //   backgroundImage: `url(${bg_auth})`,
  //   backgroundSize: 'cover',       // phủ toàn màn hình
  //   backgroundPosition: 'center',  // căn giữa
  //   backgroundRepeat: 'no-repeat',

  //   zIndex: -1,
  // },
}));

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  borderRadius: theme.spacing(3),
  [theme.breakpoints.down('lg')]: {
    maxWidth: '450px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '500px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
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
    <AuthContainer direction='column' justifyContent='space-between'>
      <Card variant='outlined'>
        <ThemeProvider theme={theme}>
          <Outlet />
        </ThemeProvider>
      </Card>
    </AuthContainer>
  );
}

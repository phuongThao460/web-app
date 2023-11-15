import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';

export const SidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Administrator',
    icon: <SupervisorAccountIcon />,
    link: '/dashboard/admin',
  },
  {
    title: 'Client',
    icon: <PersonIcon />,
    link: '/user',
  }
];

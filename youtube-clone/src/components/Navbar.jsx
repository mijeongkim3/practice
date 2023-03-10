import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

// import { logo } from '../utils/constants';
import logo from '../youtube_logo.png';
import { SearchBar } from './';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img
        className="img"
        src={logo}
        alt="logo"
        // height={20} width={100}///
      />
    </Link>
    <SearchBar />
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img
        className="img"
        src={logo}
        alt="logo"
        // height={20}
        // width={100}
        style={{ visibility: 'hidden' }}
      />
    </Link>
  </Stack>
);

export default Navbar;

// import { Stack } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { logo } from '../utils/constants';
// import SearchBar from './SearchBar';

// const Navbar = () => (
//   <Stack
//     direction="row"
//     alignItems="center"
//     p={2}
//     sx={{
//       position: 'sticky',
//       background: ' #000',
//       top: 0,
//       justifyContent: 'Space-between',
//     }}
//   >
//     <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
//       <img src={logo} alt="logo" height={45} style={{ marginRight: '10px' }} />
//       <div style={{ color: 'white', fontWeight: 'bold' }}>MiTube</div>
//     </Link>
//     <SearchBar />
//   </Stack>
// );

// export default Navbar;

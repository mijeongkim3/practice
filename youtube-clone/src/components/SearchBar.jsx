import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      className="paper"
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        backgroundColor: '#181818;',
        borderRadius: 20,
        border: '1px solid #717171;',
        pl: 2,
        boxShadow: 'none',
        position: 'relative',
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        border="0px"
        style={{
          backgroundColor: '#181818',
          boaxShadow: 'none',
          borderStyle: 'none',
          color: 'white',
        }}
      />
      <IconButton
        className="icon"
        type="submit"
        sx={{ p: '10px', color: 'white' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

// ,,.

// import { IconButton, Paper } from '@mui/material';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search } from '@mui/icons-material';

// const SearchBar = () => {
//   return (
//     <Paper
//       component="form"
//       onSubmit={() => {}}
//       sx={{
//         backgroundColor: '#181818;',
//         borderRadius: 20,
//         border: '1px solid #717171;',
//         pl: 2,
//         boxShadow: 'none',
//         mr: { sm: 5 },
//       }}
//     >
//       <input
//         className="serach-bar"
//         placeholder="검색"
//         value=""
//         onChange={() => {}}
//         border="0px"
//         style={{
//           backgroundColor: '#181818',
//           boaxShadow: 'none',
//           borderStyle: 'none',
//         }}
//       />

//       <IconButton type="submit" sx={{ p: '10px', color: 'white' }}>
//         <Search />
//       </IconButton>
//     </Paper>
//   );
// };

// export default SearchBar;

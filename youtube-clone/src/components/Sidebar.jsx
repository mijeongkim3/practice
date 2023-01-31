import React from 'react';
import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)} //카테고리 눌렀을때 상단의 제목바뀌게
        style={{
          background: category.name === selectedCategory && '#606060',
          color: 'white',
        }}
        key={category.name}
      >
        <span
          className="category-icon"
          style={{
            color: category.name === selectedCategory ? 'red' : 'white',
            marginRight: '15px',
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;

// import { Stack } from '@mui/material';
// import { categories } from '../utils/constants';

// // const selectedCategory = '홈'; //밑에줄이 프롭스로 피드의 사이드바에 전달돼서 이게 필요없어짐

// const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
//   <Stack
//     direction="row"
//     sx={{
//       overflowY: 'auto',
//       height: { sx: 'auto', md: '95%' },
//       flexDirection: { md: 'column' },
//     }}
//   >
//     {categories.map((category) => (
//       <button
//         className="category-btn"
//         onClick={() => setSelectedCategory(category.name)} //카테고리 눌렀을때 상단의 제목바뀌게
//         style={{
//           background: category.name === selectedCategory && '#606060',
//           color: 'white',
//         }}
//         key={category.name}
//       >
//         <span
//           className="category-icon"
//           style={{
//             color: category.name === selectedCategory ? 'red' : 'white',
//           }}
//         >
//           {category.icon}
//         </span>
//         <span
//           style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}
//         >
//           {category.name}
//         </span>
//       </button>
//     ))}

//     <style jsx>{`
//       .category-icon {
//         margin-right: 15px;
//       }
//     `}</style>
//   </Stack>
// );

// export default Sidebar;
// // ddffd

import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const selectedCategory = '홈';

const Sidebar = () => (
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

    <style jsx>{`
      .category-icon {
        margin-right: 15px;
      }
    `}</style>
  </Stack>
);

export default Sidebar;
// dd

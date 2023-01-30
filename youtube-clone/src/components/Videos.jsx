import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos }) => {
  // console.log(videos); //프롭스로 비디오를..분해해서..
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {/* {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))} */}
    </Stack>
  );
};

export default Videos;

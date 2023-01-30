import { Link } from 'react-router-dom'; //링크누르면 해당 비디오카드 세부페이지로 이동
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

import { CheckCircle } from '@mui/icons-material';
import {
  deomThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(videoId, snippet);
  //프롭스..

  //   console.log(video);
  return <div>VideoCard</div>;
};

export default VideoCard;

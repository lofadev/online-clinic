import { FC } from 'react';
import { VideoStyled } from './styled';

export type VideoType = {
  src: string;
  width: number;
  height: number;
};

interface VideoProps {
  data: VideoType;
}

export const Video: FC<VideoProps> = ({ data }) => {
  return (
    <VideoStyled
      src={data?.src}
      width={data?.width}
      height={data?.height}
      frameBorder="0"
      allowFullScreen
      title=" Video"
    />
  );
};

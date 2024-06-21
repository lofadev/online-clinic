import { FC } from 'react';
import { VideoStyled } from './styled';
import { VideoProps } from './type';

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

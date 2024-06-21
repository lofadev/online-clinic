import styled from 'styled-components';
import { VideoType } from '.';

export const VideoStyled = styled.iframe<VideoType>`
  display: block;
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
`;

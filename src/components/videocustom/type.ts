export type VideoType = {
  src: string;
  width: number;
  height: number;
};

export interface VideoProps {
  data: VideoType;
}

import type { ProjectImageData } from './project-image-data.type';

export type ProjectData = {
  area: string;
  period: string;
  title: string;
  summary: string;
  tags: string[];
  toneClass: string;
  detailsRoute: string;
  previewImage?: ProjectImageData;
};

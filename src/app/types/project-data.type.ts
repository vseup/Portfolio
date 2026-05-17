import type { ProjectImageData } from '@app/types/project-image-data.type';

export interface ProjectData {
  area: string;
  period: string;
  title: string;
  summary: string;
  tags: string[];
  toneClass: string;
  detailsRoute: string;
  previewImage?: ProjectImageData;
}

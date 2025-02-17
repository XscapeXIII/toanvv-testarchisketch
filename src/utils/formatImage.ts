import { ASSETS_URL } from '@/settings/constants';

const formatImage = (image: any, hasAssetUrl?: boolean) => {
  if (image?.file) {
    const { path, name } = image?.file || {};

    if (hasAssetUrl) {
      return `${ASSETS_URL}/${path}${name}` || '';
    }
    return `${path}${name}` || '';
  }

  return image;
};

const formatImagePreview = (image: string) => {
  if (image) {
    return ASSETS_URL + '/preview/' + image;
  }
  return image;
};

const formatImageStatements = (image: any, hasAssetUrl?: boolean) => {
  if (image) {
    const { path, name } = image || {};

    if (hasAssetUrl) {
      return `${ASSETS_URL}/${path}${name}` || '';
    }
    return `${path}${name}` || '';
  }

  return image;
};

export const convertUrlImage = (image: any, size?: string) => {
  if (!image?.file?.name) {
    return image;
  }
  if (size) {
    return `${ASSETS_URL}/upload/image/${size}_${image?.file?.name}`;
  }
  return `${ASSETS_URL}/upload/image/${image?.file?.name}`;
};

export const convertUrlVideo = (image: any, size?: string) => {
  if (!image?.file?.name) {
    return image;
  }
  if (size) {
    return `${ASSETS_URL}/upload/video/${size}_${image?.file?.name}`;
  }
  return `${ASSETS_URL}/upload/video/${image?.file?.name}`;
};

export { formatImage, formatImagePreview, formatImageStatements };

import { endpointOther } from '@/services/endpoint';
import { postRequest } from '@/services/request';

export const dataURLtoFile = (dataURL: string) => {
  const arr = dataURL?.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1] || '');
  let n = bstr?.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], 'signature.png', { type: mime });
};

export const handleUploadFile = async (file: File) => {
  let url: string;

  try {
    const res: any = await postRequest(
      endpointOther.UPLOAD_IMG,
      {
        data: { files: file },
      },
      true,
    );
    url = res?.data?.file?.[0];
  } catch (err) {
    // Handle error
    return err;
  }

  return url;
};

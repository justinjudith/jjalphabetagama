import {
  ToastSuccess,
  ToastError,
  ToastWarning,
} from '@/Components/Shared/Notification';
import LogError from './LogError';
import BASEURL from './BASEURL';
async function FetchSummary() {
  try {
    LogError([BASEURL],BASEURL)
    const response = await fetch(`${BASEURL}api/ownerdata/get`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let jsonData = await response.json();
    if (response.status === 200) {
      return jsonData.ownerData;
    }
    if (response.status === 400) {
      ToastError(jsonData.message);
    }
    if (response.status === 500) {
      ToastError(jsonData.message);
    }
  } catch (error: any) {
    LogError('[Owner Summary]', error);
    ToastError('Unable to Load Owner Summary for now!');
  }
}
export default FetchSummary;

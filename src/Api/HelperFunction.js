/* eslint-disable no-shadow */
// import Toast from "react-native-toast";

import {EventRegister} from 'react-native-event-listeners';

// import RNFetchBlob from "rn-fetch-blob";
import {Alert, Platform} from 'react-native';
// import { getLocale, getLocalizedString } from "../Translations";
// import FileViewer from "react-native-file-viewer";
// import moment from "moment";
import {showMessage} from 'react-native-flash-message';
import {store} from '../redux/store';

export const showToast = msg => {
  setTimeout(() => {
    // Toast.show(getMessage(msg));
    showMessage({
      message: msg,
      type: 'default',
    });
  }, 500);
};

export const handleResponse = ({response, jsonResponse}) => {
  switch (response.status) {
    case 200: {
      if (
        jsonResponse.hasOwnProperty('errors') ||
        (jsonResponse.hasOwnProperty('error') && jsonResponse.error == true)
      ) {
        const message = getMessage(jsonResponse);
        return Promise.reject(message);
      } else {
        return Promise.resolve(jsonResponse);
      }
    }
    case 201: {
      if (
        jsonResponse.hasOwnProperty('errors') ||
        (jsonResponse.hasOwnProperty('error') && jsonResponse.error == true)
      ) {
        const message = getMessage(jsonResponse);
        return Promise.reject(message);
      } else {
        return Promise.resolve(jsonResponse);
      }
    }
    case 401: {
      const message = getMessage(jsonResponse);
      EventRegister.emit('logout');
      return Promise.reject(message);
      // break;
    }
    case 500: {
      const message = getMessage(jsonResponse);
      EventRegister.emit('logout');
      return Promise.reject(message);
    }
    default: {
      const message = getMessage(jsonResponse);
      return Promise.reject(message);
    }
  }
};
export const performNetworkRequest = async (url, configs) => {
  url = encodeURI(url);
  try {
    const response = await fetch(url, configs);
    const jsonResponse = await response.json();
    return Promise.resolve({response, jsonResponse});
  } catch (e) {
    return Promise.reject(e);
  }
};
export const message = 'Something went wrong';
export const getMessage = json => {
  switch (typeof json) {
    case 'string': {
      return json;
    }
    case 'object': {
      if (Array.isArray(json)) {
        var data = json[0];
        return getMessage(data);
      } else {
        if (json.errors) {
          const data = json.errors;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else if (json.error) {
          const data = json.error;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else if (json.message) {
          if (json.message) {
            return getMessage(json.message);
          } else if (json.error) {
            return getMessage(json.error);
          } else {
            return message;
          }
        } else if (json?.response) {
          const data = json?.response;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else {
          const data = json;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        }
      }
    }
    default: {
      return message;
    }
  }
};
export const jsonToFormdata = json => {
  var data = new FormData();
  const entries = Object.entries(json);
  entries.forEach(entry => {
    data.append(entry[0], entry[1]);
  });
  return data;
};
export const getConfigs = (method, body, formData) => {
  var headers = {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  };
  if (formData === true) {
    headers['Content-Type'] = 'multipart/form-data';
  }
  const data = store.getState();
  if (data) {
    if (data?.user) {
      if (data?.user?.user?.token != null) {
        if (data?.user?.user?.token) {
          headers.Authorization = 'Bearer ' + data?.user?.user?.token;
        }
      }
    }
  }
  var configs = {
    method: method,
    headers: headers,
  };
  if (body) {
    if (method === 'POST' || method === 'PUT') {
      if (formData === true) {
        configs.body = jsonToFormdata(body);
      } else {
        configs.body = JSON.stringify(body);
      }
    }
  }
  console.log('CONFIGS', configs);
  return configs;
};
export const dataToQueryParameter = data => {
  if (typeof data === 'object') {
    if (!Array.isArray(data)) {
      var params = '?';
      const dataArray = Object.entries(data);
      if (dataArray.length > 0) {
        dataArray.forEach((entry, index) => {
          var amp = index < dataArray.length - 1 ? '&' : '';
          params = `${params}${entry[0]}=${entry[1]}${amp}`;
        });
        return params;
      }
    }
  } else if (typeof data === 'string') {
    return data;
  }
  return '';
};

// const checkFolderExist = async () => {
//   try {
//     const folder = await RNFetchBlob.fs.exists(RNFetchBlob.fs.dirs.DocumentDir);

//     if (!folder) {
//       const creationSuccess = await RNFetchBlob.fs.mkdir(
//         RNFetchBlob.fs.dirs.DocumentDir,
//       );

//       if (creationSuccess) {
//         return Promise.resolve(true);
//       }
//     } else {
//       return Promise.resolve(true);
//     }
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// export const downloadFile = async (uri, extension) => {
//   try {
//     const { dirs } = RNFetchBlob.fs;
//     const ifExist = await checkFolderExist();
//     if (ifExist) {
//       const dirToSave = Platform.select({
//         ios: dirs.DocumentDir,
//         android: dirs.DownloadDir,
//       });
//       const state = store.getState();
//       const reportName = `${dirToSave}/Tickd${moment().format(
//         "DD_MMM_YYYY_hh_mm_ss",
//       )}.${extension}`;
//       var token = null;
//       if (state) {
//         if (state.SessionReducer) {
//           if (state.SessionReducer.token != null) {
//             if (state.SessionReducer.token) {
//               token = state.SessionReducer.token;
//             }
//           }
//         }
//       }
//       const config = {
//         addAndroidDownloads: {
//           useDownloadManager: true,
//           notification: true,
//           mediaScannable: true,
//           description: "Tickd",
//           title: "Tickd Attachment",
//           path: reportName,
//         },
//         mediaScannable: true,
//         title: "Tickd Attachment",
//         path: reportName,
//         appendExt: extension,
//         fileCache: true,
//         trusty: true,
//       };
//       const response = await RNFetchBlob.config(config).fetch("GET", uri, {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/" + extension,
//       });
//       Alert.alert(
//         getLocalizedString().downloadManager[getLocale()],
//         getLocalizedString().downloadManagerMessage[getLocale()],
//         [
//           {
//             text: getLocalizedString().downloadManagerPositiveButton[
//               getLocale()
//             ],
//             onPress: () =>
//               FileViewer?.open(response.path(), {
//                 showOpenWithDialog: false,
//               }),
//             style: "default",
//           },
//           {
//             text: getLocalizedString().downloadManagerNegativeButton[
//               getLocale()
//             ],
//             style: "destructive",
//           },
//         ],
//         {
//           cancelable: true,
//         },
//       );
//       return Promise.resolve("File downloaded successfully");
//     }
//   } catch (e) {
//     const message = getMessage(e);
//     return Promise.reject(message);
//   }
// };

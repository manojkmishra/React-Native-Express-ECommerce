import { Google, Constants } from 'expo';

const scopes = ['profile', 'email'];

const loginAsync = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: Constants.manifest.extra.googleAppId.android,
     // iosClientId: Constants.manifest.extra.googleAppId.ios,
      scopes,
    });
    console.log('api/googleapi/result=',result);

    if (result.type === 'success') {
      return Promise.resolve(result.accessToken);
    }

    return Promise.reject('No success');
  } catch (error) {console.log("/api/google-error=",error);
    return Promise.reject(error);
  }
};

export const GoogleApi = {
  loginAsync,
};
import { Facebook, Constants } from 'expo';

const permissions = ['public_profile', 'email'];
//const facebookAppId = "2103031686613662";

const loginAsync = async () => 
{ try {  const { type, token } = await Facebook.logInWithReadPermissionsAsync( Constants.manifest.facebookAppId, { permissions }, );
         console.log("/api/facebook-try type,token=",type,token);
         if (type === 'success') { console.log("/api/facebook-sucess=",type); return Promise.resolve(token);    }
         return Promise.reject('No success');
      } catch (error) { console.log("/api/facebook-error=",error); return Promise.reject(error);  }
};

export const FacebookApi = { loginAsync, };
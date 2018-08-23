import { AsyncStorage } from 'react-native';
import { types, flow } from 'mobx-state-tree';

import { customersApi } from '../api/Api';
import { NavigationService } from '../api/NavigationService';

const TOKEN_KEY = '@instore/token';

const UserInfo = types.model('UserInfo', { _id: types.identifier,  firstName: types.string,  lastName: types.string,  avatarUrl: types.maybe(types.string),});

export const CurrentUser = types
  .model('CurrentUser', {    authToken: types.maybe(types.string),    info: types.maybe(UserInfo),  })
  .actions(self => 
    ({   setupAuth: flow(function*() //5--last
            {  yield self.getAuthToken();   
                yield self.getUserInfo();  
            }),
         getAuthToken: flow(function*() //3
            { try {  const token = yield AsyncStorage.getItem(TOKEN_KEY);
                console.log('/models/currentuser.js-getAuthToken-token=',token);
                    if (token) {  self.authToken = token;  } 
                    else {  NavigationService.navigate('Auth');   }
                   } 
               catch (error) { console.log('getAuthToken-error', error);  }
            }),
            
         saveToken: flow(function*(token) //2
            {  try {   console.log('/models/currentuser.js--saveToken');
                    yield AsyncStorage.setItem(TOKEN_KEY, token);
                } catch (error) {  console.log('/models/cuser-saveToken--error', error); }
            }),
            
         login: flow(function*(providerToken, provider) //1
           {  try {   const res = yield customersApi.post({ token: providerToken, provider, }).json(); //--Api.js--------trigger customerApi
                      console.log('/models/currentuser.js--login---res=',res);
                     if (res.token) {   self.authToken = res.token;
                                        yield self.saveToken(res.token);
                                        yield self.getUserInfo();
                             }
                  } catch (error) {   console.log('/models/currentuser.js--login--error', error); }
           }),
        getUserInfo: flow(function*() //4 //-----------------------here its going to server to get user info with jwt token
        {  try { if (self.authToken) 
                    {  const res = yield customersApi.url('/me').headers({ Authorization: `Bearer ${self.authToken}` }).get().json();
                    console.log('/models/currentuser.js--getUserInfo--res=', res);
                       self.info = res;
                       console.log('/models/currentuser.js--getUserInfo--self.info=', self.info); //--normalizes to userinfo defined at top
                       NavigationService.navigate('Main');
                    }
        } catch (error) { console.log('getUserInfo-error', error);   }
    }),  
}));
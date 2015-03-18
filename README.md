#PS Notifications

Please note this is a very rough demo and is a work in progress...

This project contains a basic `React` components that can be used to display a weekly class schedule. It also communicates with `black-lion` and handles passing the remote request responses from  using the delivered PeopleSoft REST api.

To run this locally you must first create a file called development.json like this:

```
{
  "getNotificationsUrl": "https://[servername]/PSIGW/RESTListeningConnector/[dbname]/SCC_GET_NOTIFICATIONS_R.v1/notification/get?SCC_PROFILE_ID=&languageCd=en",
,
  "username": "user",
  "password": "password"
}
```
You also must enable the SSR_GET_NOTIFICATIONS service in Integration Broker as well as set authentication to Basic.

After creating the development.json file run the follow commands:

```
npm init
npm run start
```

Then point your browser to http://localhost:8080

![](https://github.com/hartmamt/ps-notifications/blob/master/image/screen-shot.png)

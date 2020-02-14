# IonicReact_v4
 
## Run on device 

# *** Make sure you have Android Studio installed and configured (to run the app on an emulated device or you android phone connected with USB debugging enabled). For iOS you would need Xcode.


Generate the native project by running the following command:
```
ionic capacitor add android
```
OOPS!!! This command will fail with the following error, but is necessary:
[error] Capacitor could not find the web assets directory “/home/…/…/…/MyIonicApp/build”
a file by the name of capacitor.config.json will be created. This file can be used to set the applications name and other attributes. If you pay close attention it has a location for “webDir” set to : “build”
{
“appId”: “io.ionic.starter”,
“appName”: “MyIonicApp”,
“bundledWebRuntime”: false,
“npmClient”: “npm”,
“webDir”: “build”
}

Since we did not build our project (npm run build) so far it lacks a build directory that Capacitor was looking for (hence the error). No need to panic, you can fix it by simply following the steps here:

# 1.Update your *capacitor.config.json* to the following (simply add the part that is in bold):
line 6: **"webDir": "public", **
```
{
  "appId": "io.ionic.starter",
  "appName": "appIonicReact",
  "bundledWebRuntime": false,
  "npmClient": "npm",
  "webDir": "public",
  "cordova": {}
}
```

# 2. Update your scripts field in *package.json* so it looks like this (simply add the part that is in bold):

    **"ionic:build": "npm run build && ionic capacitor copy android"**
```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "ionic:build": "npm run build && ionic capacitor copy android"
  },
  ```

  Now, run the following command:
```
ionic build
```
update your capacitor.config.json to the following (simply add the part that is in bold)

Finally change your capacitor.config.json to point “webDir” to the “build” folder, like:
```
{
.
.
.
“appId”: “io.ionic.starter”,
“appName”: “MyIonicApp”,
“bundledWebRuntime”: false,
“npmClient”: “npm”,
“webDir”: “build”
.
.
.
}
```
Now, run
```
ionic build
```

# END
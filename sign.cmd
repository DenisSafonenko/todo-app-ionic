copy platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk todo-app-ionic.apk
"c:\Java\jdk1.8.0_144\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore todo-app-ionic.apk tt

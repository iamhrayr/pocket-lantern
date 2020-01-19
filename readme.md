# Android

**Release**
build apk - `./gradlew assembleRelease`

bundle aab - `./gradlew bundleRelease`

**debug**
build apk - `./gradlew assembleDebug`

bundle aab - `./gradlew bundleDebug`

# troubleshoots

- in any unexpected issue run: `./gradlew clean`

- if there is a mismatch with the versions with `node_modules/react-native-torch/android/build.gradle`, edit:

```
  compileSdkVersion 28
  buildToolsVersion "28.0.3"

  defaultConfig {
      minSdkVersion 16
      targetSdkVersion 28
  }
```

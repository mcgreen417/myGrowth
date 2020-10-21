# This is where the frontend lives :)

## **Make sure you have Node, Yarn, Python 2+, and JDK 8+ installed.**

* `yarn android` to run app on connected android device/emulator

* `yarn ios` to run on connected ios device

* `yarn web` to run expo on browser, allows you to test android and ios too

Other scripts can be found/added in the `package.json`

### To use `yarn web` and test on android and ios.

1. Get the app on whichever device/emulator you're using.

2. Run `yarn web` a expo devtools link should appear on the CLI, it should also pop up in your browser.

3. After the dev build is done, it will pop up with the website and also give you a QR code and link to it in the CLI. Expo devtools site also has this information

4. On the device/emulator you want to test scan the QR code, or paste the url in the expo app and it should build for your device and eventually display

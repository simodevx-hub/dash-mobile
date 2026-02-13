import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.psymaghreb.dashboard',
  appName: 'PsyMaghreb Dashboard',
  webDir: 'dist',
  server: {
    url: 'https://psymaghreb.com/dashboard',
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      spinnerColor: "#999999"
    },
    StatusBar: {
      style: "DARK",
      backgroundColor: "#ffffffff"
    }
  }
};

export default config;


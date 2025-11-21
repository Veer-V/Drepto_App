import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.drepto.app',
  appName: 'Drepto',
  webDir: 'dist',
  plugins: {
    Assets: {
      iconIos: true,
      iconAndroid: true,
    }
  }
};

export default config;

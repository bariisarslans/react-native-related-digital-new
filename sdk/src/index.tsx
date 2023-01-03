import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-related-digital' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const _RelatedDigitalNativeModule = NativeModules.RelatedDigital
  ? NativeModules.RelatedDigital
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );

  export function multiply(a: number, b: number): Promise<number> {
    return _RelatedDigitalNativeModule.multiply(a, b);
  }

// export default class RelatedDigital {
//   constructor(
//     organizationId: string,
//     profileId: string,
//     dataSource: string,
//     askLocationPermissionAtStart: boolean){
//   }

//   static init(
//     organizationId: string,
//     profileId: string,
//     dataSource: string,
//     askLocationPermissionAtStart: boolean
//   ): void {
//     console.log(organizationId);
//     console.log(profileId);
//     console.log(dataSource);
//     console.log(askLocationPermissionAtStart);
//   }

//   static multiply(a: number, b: number): Promise<number> {
//     console.log(a);
//     console.log(b);
//     return _RelatedDigitalNativeModule.multiply(a, b);
//   }

// }



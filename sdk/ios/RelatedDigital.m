#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RelatedDigital, NSObject)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(initialize:(NSString *) organizationId
                  withProfileId:(NSString *) profileId
                  withDataSource:(NSString *) dataSource
                  withAskLocationPermissionAtStart: BOOL)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end

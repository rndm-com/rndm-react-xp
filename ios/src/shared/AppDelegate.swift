import UIKit

extension RCTBundleURLProvider {
  static var root: URL {
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "src/index.native", fallbackResource: nil)
  }
}

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  
  var window: UIWindow? = UIWindow(frame: UIScreen.main.bounds)
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey : Any]? = nil) -> Bool {
    
    let moduleName = "rndm"
    let view = RCTRootView(bundleURL: RCTBundleURLProvider.root, moduleName: moduleName, initialProperties: nil, launchOptions: launchOptions)
    view?.backgroundColor = UIColor.white
    let controller = UIViewController()
    controller.view = view
    window?.rootViewController = controller
    window?.makeKeyAndVisible()
    
    return true
  }
  
}

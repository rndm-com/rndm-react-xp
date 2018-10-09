package com.rndm

import android.app.Application
import com.rndm.BuildConfig
import com.facebook.react.ReactApplication
import com.oblador.vectoricons.VectorIconsPackage
import com.learnium.RNDeviceInfo.RNDeviceInfo
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader

import java.util.Arrays

class MainApplication : Application(), ReactApplication {

    private val mReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }


        override fun getPackages(): List<ReactPackage> {
            return Arrays.asList(
                    MainReactPackage(),
                    VectorIconsPackage(),
                    RNDeviceInfo()
            )
        }

        override fun getJSMainModuleName(): String {
            return "src/index.native"
        }
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, /* native exopackage */ false)
    }
}

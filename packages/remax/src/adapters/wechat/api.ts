import promisify, { optionalPromisify } from '../../utils/promisify';

export const getAppStub = getApp;

export const canIUse = wx.canIUse;
export const base64ToArrayBuffer = wx.base64ToArrayBuffer;
export const arrayBufferToBase64 = wx.arrayBufferToBase64;
export const getSystemInfoSync = wx.getSystemInfoSync;
export const getSystemInfo = optionalPromisify(wx.getSystemInfo);
export const getUpdateManager = wx.getUpdateManager;
export const getLaunchOptionsSync = wx.getLaunchOptionsSync;
export const onPageNotFound = wx.onPageNotFound;
export const onError = wx.onError;
export const onAudioInterruptionEnd = wx.onAudioInterruptionEnd;
export const onAppShow = wx.onAppShow;
export const onAppHide = wx.onAppHide;
export const offPageNotFound = wx.offPageNotFound;
export const offError = wx.offError;
export const offAudioInterruptionEnd = wx.offAudioInterruptionEnd;
export const offAudioInterruptionBegin = wx.offAudioInterruptionBegin;
export const offAppShow = wx.offAppShow;
export const offAppHide = wx.offAppHide;
export const setEnableDebug = promisify(wx.setEnableDebug);
export const getLogManager = wx.getLogManager;
export const switchTab = promisify(wx.switchTab);
export const reLaunch = promisify(wx.reLaunch);
export const redirectTo = promisify(wx.redirectTo);
export const navigateTo = promisify(wx.navigateTo);
export const navigateBack = optionalPromisify(wx.navigateBack);
export const showToast = promisify(wx.showToast);
export const showModal = promisify(wx.showModal);
export const showLoading = promisify(wx.showLoading);
export const showActionSheet = promisify(wx.showActionSheet);
export const hideToast = optionalPromisify(wx.hideToast);
export const hideLoading = optionalPromisify(wx.hideLoading);
export const showNavigationBarLoading = optionalPromisify(
  wx.showNavigationBarLoading
);
export const setNavigationBarTitle = promisify(wx.setNavigationBarTitle);
export const setNavigationBarColor = promisify(wx.setNavigationBarColor);
export const hideNavigationBarLoading = optionalPromisify(
  wx.hideNavigationBarLoading
);
export const setBackgroundTextStyle = promisify(wx.setBackgroundTextStyle);
export const setBackgroundColor = promisify(wx.setBackgroundColor);
export const showTabBarRedDot = promisify(wx.showTabBarRedDot);
export const showTabBar = promisify(wx.showTabBar);
export const setTabBarStyle = optionalPromisify(wx.setTabBarStyle);
export const setTabBarItem = promisify(wx.setTabBarItem);
export const setTabBarBadge = promisify(wx.setTabBarBadge);
export const removeTabBarBadge = promisify(wx.removeTabBarBadge);
export const hideTabBarRedDot = promisify(wx.hideTabBarRedDot);
export const hideTabBar = promisify(wx.hideTabBar);
export const loadFontFace = promisify(wx.loadFontFace);
export const stopPullDownRefresh = optionalPromisify(wx.stopPullDownRefresh);
export const startPullDownRefresh = optionalPromisify(wx.startPullDownRefresh);
export const pageScrollTo = promisify(wx.pageScrollTo);
export const createAnimation = wx.createAnimation;
export const setTopBarText = promisify(wx.setTopBarText);
export const nextTick = wx.nextTick;
export const getMenuButtonBoundingClientRect =
  wx.getMenuButtonBoundingClientRect;
export const onWindowResize = wx.onWindowResize;
export const offWindowResize = wx.offWindowResize;
export const onKeyboardHeightChange = wx.onKeyboardHeightChange;
export const getSelectedTextRange = wx.getSelectedTextRange;
export const request = promisify(wx.request);
export const downloadFile = promisify(wx.downloadFile);
export const uploadFile = promisify(wx.uploadFile);
export const sendSocketMessage = promisify(wx.sendSocketMessage);
export const onSocketOpen = wx.onSocketOpen;
export const onSocketMessage = wx.onSocketMessage;
export const onSocketError = wx.onSocketError;
export const onSocketClose = wx.onSocketClose;
export const connectSocket = promisify(wx.connectSocket);
export const closeSocket = optionalPromisify(wx.closeSocket);
export const stopLocalServiceDiscovery = optionalPromisify(
  wx.stopLocalServiceDiscovery
);
export const startLocalServiceDiscovery = promisify(
  wx.startLocalServiceDiscovery
);
export const onLocalServiceResolveFail = wx.onLocalServiceResolveFail;
export const onLocalServiceLost = wx.onLocalServiceLost;
export const onLocalServiceFound = wx.onLocalServiceFound;
export const onLocalServiceDiscoveryStop = wx.onLocalServiceDiscoveryStop;
export const offLocalServiceResolveFail = wx.offLocalServiceResolveFail;
export const offLocalServiceLost = wx.offLocalServiceLost;
export const offLocalServiceFound = wx.offLocalServiceFound;
export const offLocalServiceDiscoveryStop = wx.offLocalServiceDiscoveryStop;
export const createUDPSocket = wx.createUDPSocket;
export const setStorageSync = wx.setStorageSync;
export const setStorage = promisify(wx.setStorage);
export const removeStorageSync = wx.removeStorageSync;
export const removeStorage = promisify(wx.removeStorage);
export const getStorageSync = wx.getStorageSync;
export const getStorageInfoSync = wx.getStorageInfoSync;
export const getStorageInfo = optionalPromisify(wx.getStorageInfo);
export const getStorage = promisify(wx.getStorage);
export const clearStorageSync = wx.clearStorageSync;
export const clearStorage = optionalPromisify(wx.clearStorage);
export const createMapContext = wx.createMapContext;
export const saveImageToPhotosAlbum = promisify(wx.saveImageToPhotosAlbum);
export const previewImage = promisify(wx.previewImage);
export const getImageInfo = promisify(wx.getImageInfo);
export const compressImage = promisify(wx.compressImage);
export const chooseMessageFile = promisify(wx.chooseMessageFile);
export const chooseImage = promisify(wx.chooseImage);
export const saveVideoToPhotosAlbum = promisify(wx.saveVideoToPhotosAlbum);
export const createVideoContext = wx.createVideoContext;
export const chooseVideo = promisify(wx.chooseVideo);
export const stopVoice = optionalPromisify(wx.stopVoice);
export const setInnerAudioOption = promisify(wx.setInnerAudioOption);
export const playVoice = promisify(wx.playVoice);
export const pauseVoice = optionalPromisify(wx.pauseVoice);
export const getAvailableAudioSources = optionalPromisify(
  wx.getAvailableAudioSources
);
export const createInnerAudioContext = wx.createInnerAudioContext;
export const createAudioContext = wx.createAudioContext;
export const stopBackgroundAudio = optionalPromisify(wx.stopBackgroundAudio);
export const seekBackgroundAudio = promisify(wx.seekBackgroundAudio);
export const playBackgroundAudio = promisify(wx.playBackgroundAudio);
export const pauseBackgroundAudio = optionalPromisify(wx.pauseBackgroundAudio);
export const onBackgroundAudioStop = wx.onBackgroundAudioStop;
export const onBackgroundAudioPlay = wx.onBackgroundAudioPlay;
export const onBackgroundAudioPause = wx.onBackgroundAudioPause;
export const getBackgroundAudioPlayerState = optionalPromisify(
  wx.getBackgroundAudioPlayerState
);
export const getBackgroundAudioManager = wx.getBackgroundAudioManager;
export const createLivePusherContext = wx.createLivePusherContext;
export const createLivePlayerContext = wx.createLivePlayerContext;
export const stopRecord = optionalPromisify(wx.stopRecord);
export const startRecord = promisify(wx.startRecord);
export const getRecorderManager = wx.getRecorderManager;
export const createCameraContext = wx.createCameraContext;
export const stopLocationUpdate = optionalPromisify(wx.stopLocationUpdate);
export const startLocationUpdateBackground = optionalPromisify(
  wx.startLocationUpdateBackground
);
export const startLocationUpdate = optionalPromisify(wx.startLocationUpdate);
export const openLocation = promisify(wx.openLocation);
export const onLocationChange = wx.onLocationChange;
export const getLocation = promisify(wx.getLocation);
export const chooseLocation = optionalPromisify(wx.chooseLocation);
export const updateShareMenu = promisify(wx.updateShareMenu);
export const showShareMenu = promisify(wx.showShareMenu);
export const hideShareMenu = optionalPromisify(wx.hideShareMenu);
export const getShareInfo = promisify(wx.getShareInfo);
export const createOffscreenCanvas = wx.createOffscreenCanvas;
export const createCanvasContext = wx.createCanvasContext;
export const canvasToTempFilePath = promisify(wx.canvasToTempFilePath);
export const canvasPutImageData = promisify(wx.canvasPutImageData);
export const canvasGetImageData = promisify(wx.canvasGetImageData);
export const saveFile = promisify(wx.saveFile);
export const removeSavedFile = promisify(wx.removeSavedFile);
export const openDocument = promisify(wx.openDocument);
export const getSavedFileList = optionalPromisify(wx.getSavedFileList);
export const getSavedFileInfo = promisify(wx.getSavedFileInfo);
export const getFileSystemManager = wx.getFileSystemManager;
export const getFileInfo = promisify(wx.getFileInfo);
export const login = optionalPromisify(wx.login);
export const checkSession = optionalPromisify(wx.checkSession);
export const navigateToMiniProgram = promisify(wx.navigateToMiniProgram);
export const navigateBackMiniProgram = promisify(wx.navigateBackMiniProgram);
export const getAccountInfoSync = wx.getAccountInfoSync;
export const getUserInfo = promisify(wx.getUserInfo);
export const reportMonitor = wx.reportMonitor;
export const reportAnalytics = wx.reportAnalytics;
export const requestPayment = promisify(wx.requestPayment);
export const authorize = promisify(wx.authorize);
export const openSetting = optionalPromisify(wx.openSetting);
export const getSetting = optionalPromisify(wx.getSetting);
export const chooseAddress = optionalPromisify(wx.chooseAddress);
export const openCard = promisify(wx.openCard);
export const addCard = promisify(wx.addCard);
export const chooseInvoiceTitle = optionalPromisify(wx.chooseInvoiceTitle);
export const chooseInvoice = optionalPromisify(wx.chooseInvoice);
export const startSoterAuthentication = promisify(wx.startSoterAuthentication);
export const checkIsSupportSoterAuthentication = optionalPromisify(
  wx.checkIsSupportSoterAuthentication
);
export const checkIsSoterEnrolledInDevice = promisify(
  wx.checkIsSoterEnrolledInDevice
);
export const getWeRunData = optionalPromisify(wx.getWeRunData);
export const stopBeaconDiscovery = optionalPromisify(wx.stopBeaconDiscovery);
export const startBeaconDiscovery = promisify(wx.startBeaconDiscovery);
export const onBeaconUpdate = wx.onBeaconUpdate;
export const onBeaconServiceChange = wx.onBeaconServiceChange;
export const getBeacons = optionalPromisify(wx.getBeacons);
export const stopWifi = optionalPromisify(wx.stopWifi);
export const startWifi = optionalPromisify(wx.startWifi);
export const setWifiList = promisify(wx.setWifiList);
export const onWifiConnected = wx.onWifiConnected;
export const onGetWifiList = wx.onGetWifiList;
export const getWifiList = optionalPromisify(wx.getWifiList);
export const getConnectedWifi = optionalPromisify(wx.getConnectedWifi);
export const connectWifi = promisify(wx.connectWifi);
export const addPhoneContact = promisify(wx.addPhoneContact);
export const writeBLECharacteristicValue = promisify(
  wx.writeBLECharacteristicValue
);
export const readBLECharacteristicValue = promisify(
  wx.readBLECharacteristicValue
);
export const onBLEConnectionStateChange = wx.onBLEConnectionStateChange;
export const onBLECharacteristicValueChange = wx.onBLECharacteristicValueChange;
export const notifyBLECharacteristicValueChange = promisify(
  wx.notifyBLECharacteristicValueChange
);
export const getBLEDeviceServices = promisify(wx.getBLEDeviceServices);
export const getBLEDeviceCharacteristics = promisify(
  wx.getBLEDeviceCharacteristics
);
export const createBLEConnection = promisify(wx.createBLEConnection);
export const closeBLEConnection = promisify(wx.closeBLEConnection);
export const stopBluetoothDevicesDiscovery = optionalPromisify(
  wx.stopBluetoothDevicesDiscovery
);
export const startBluetoothDevicesDiscovery = promisify(
  wx.startBluetoothDevicesDiscovery
);
export const openBluetoothAdapter = wx.openBluetoothAdapter;
export const onBluetoothDeviceFound = wx.onBluetoothDeviceFound;
export const onBluetoothAdapterStateChange = wx.onBluetoothAdapterStateChange;
export const getConnectedBluetoothDevices = promisify(
  wx.getConnectedBluetoothDevices
);
export const getBluetoothDevices = optionalPromisify(wx.getBluetoothDevices);
export const getBluetoothAdapterState = optionalPromisify(
  wx.getBluetoothAdapterState
);
export const closeBluetoothAdapter = optionalPromisify(
  wx.closeBluetoothAdapter
);
export const getBatteryInfoSync = wx.getBatteryInfoSync;
export const getBatteryInfo = optionalPromisify(wx.getBatteryInfo);
export const setClipboardData = promisify(wx.setClipboardData);
export const getClipboardData = optionalPromisify(wx.getClipboardData);
export const stopHCE = optionalPromisify(wx.stopHCE);
export const startHCE = promisify(wx.startHCE);
export const sendHCEMessage = promisify(wx.sendHCEMessage);
export const onHCEMessage = wx.onHCEMessage;
export const getHCEState = optionalPromisify(wx.getHCEState);
export const onNetworkStatusChange = wx.onNetworkStatusChange;
export const getNetworkType = optionalPromisify(wx.getNetworkType);
export const setScreenBrightness = promisify(wx.setScreenBrightness);
export const setKeepScreenOn = promisify(wx.setKeepScreenOn);
export const onUserCaptureScreen = wx.onUserCaptureScreen;
export const getScreenBrightness = optionalPromisify(wx.getScreenBrightness);
export const makePhoneCall = promisify(wx.makePhoneCall);
export const stopAccelerometer = optionalPromisify(wx.stopAccelerometer);
export const startAccelerometer = promisify(wx.startAccelerometer);
export const onAccelerometerChange = wx.onAccelerometerChange;
export const stopCompass = optionalPromisify(wx.stopCompass);
export const startCompass = optionalPromisify(wx.startCompass);
export const onCompassChange = wx.onCompassChange;
export const stopDeviceMotionListening = optionalPromisify(
  wx.stopDeviceMotionListening
);
export const startDeviceMotionListening = promisify(
  wx.startDeviceMotionListening
);
export const onDeviceMotionChange = wx.onDeviceMotionChange;
export const stopGyroscope = optionalPromisify(wx.stopGyroscope);
export const startGyroscope = promisify(wx.startGyroscope);
export const onGyroscopeChange = wx.onGyroscopeChange;
export const onMemoryWarning = wx.onMemoryWarning;
export const scanCode = promisify(wx.scanCode);
export const vibrateShort = optionalPromisify(wx.vibrateShort);
export const vibrateLong = optionalPromisify(wx.vibrateLong);
export const createWorker = wx.createWorker;
export const getExtConfigSync = wx.getExtConfigSync;
export const getExtConfig = optionalPromisify(wx.getExtConfig);
export const createSelectorQuery = wx.createSelectorQuery;
export const createIntersectionObserver = wx.createIntersectionObserver;
export const createRewardedVideoAd = wx.createRewardedVideoAd;
export const createInterstitialAd = wx.createInterstitialAd;
export const cloud = wx.cloud;

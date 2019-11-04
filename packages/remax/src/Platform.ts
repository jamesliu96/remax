type Platform = 'alipay' | 'wechat' | 'h5' | 'toutiao';

const is = (platform: Platform) => process.env.REMAX_PLATFORM === platform;

const Platform = {
  get current() {
    return process.env.REMAX_PLATFORM;
  },
  get isAlipay() {
    return is('alipay');
  },
  get isH5() {
    return is('h5');
  },
  get isWechat() {
    return is('wechat');
  },
  get isToutiao() {
    return is('toutiao');
  },
};

export default Platform;

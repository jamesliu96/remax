import Platform from '../Platform';

describe('Platform', () => {
  it('should return correct platform info', () => {
    process.env['REMAX_PLATFORM'] = 'alipay';

    expect(Platform.current).toBe('alipay');
    expect(Platform.isAlipay).toBeTruthy();

    process.env['REMAX_PLATFORM'] = 'wechat';

    expect(Platform.current).toBe('wechat');
    expect(Platform.isWechat).toBeTruthy();

    process.env['REMAX_PLATFORM'] = 'toutiao';

    expect(Platform.current).toBe('toutiao');
    expect(Platform.isToutiao).toBeTruthy();

    process.env['REMAX_PLATFORM'] = 'h5';

    expect(Platform.current).toBe('h5');
    expect(Platform.isH5).toBeTruthy();
  });
});

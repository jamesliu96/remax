import { createCallbackProxy } from '../SyntheticEvent';

describe('synthetic event', () => {
  describe('stop propagation', () => {
    it('only accept onTap, bindtap', () => {
      const ontap = () => {};
      const newOntap = createCallbackProxy('onTap', ontap);

      expect(ontap).not.toBe(newOntap);

      const bindtap = () => {};
      const newBindtap = createCallbackProxy('bindtap', bindtap);

      expect(ontap).not.toBe(newBindtap);

      const foo = () => {};
      const newFoo = createCallbackProxy('foo', foo);

      expect(foo).toBe(newFoo);
    });

    it('works correctly', () => {
      const foo = jest.fn(e => {
        e.stopPropagation();
      });
      const fooProxy = createCallbackProxy('bindtap', foo);
      const bar = jest.fn();
      const barProxy = createCallbackProxy('bindtap', bar);

      const eventA = {
        timeStamp: 1,
      };

      fooProxy(eventA);
      barProxy(eventA);

      expect(foo).toBeCalledTimes(1);
      expect(bar).not.toBeCalled();

      const eventB = {
        timeStamp: 2,
      };

      fooProxy(eventB);
      barProxy(eventB);

      expect(foo).toBeCalledTimes(2);
      expect(bar).not.toBeCalled();

      const eventC = {
        timeStamp: 3,
      };

      barProxy(eventC);

      expect(bar).toBeCalledTimes(1);
    });
  });
});

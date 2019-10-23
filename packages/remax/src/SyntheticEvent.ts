const syntheticStore: {
  [key: string]: {
    propagationStopped: boolean;
    eventId?: number;
  };
} = {};

function initialSyntheticStore(eventType: string, eventId?: number) {
  syntheticStore[eventType] = {
    propagationStopped: false,
    eventId,
  };
}

const DEPRECATED_CATCH_TYPE = 'catchtap';
const SYNTHETIC_TYPES = ['bindtap', 'onTap'];
SYNTHETIC_TYPES.forEach(type => initialSyntheticStore(type));

function isSyntheticType(inputType: string) {
  /* istanbul ignore next */
  if (DEPRECATED_CATCH_TYPE === inputType.toLowerCase()) {
    console.warn(
      'DEPRECATION: remax 已支持在 onClick 事件中使用 stopPropagation 阻止事件冒泡，请尽量不要使用 catchClick'
    );
  }

  return !!SYNTHETIC_TYPES.find(type => type === inputType);
}

function createBaseSyntheticEvent(eventType: string, nativeEvent: any) {
  // 添加阻止冒泡方法
  nativeEvent.stopPropagation = () => {
    syntheticStore[eventType].propagationStopped = true;
  };

  return nativeEvent;
}

export function createCallbackProxy(
  eventType: string,
  callback: (...params: any) => any
) {
  if (!isSyntheticType(eventType)) {
    return callback;
  }

  return function(nativeEvent: any, ...restParams: any) {
    const syntheticEvent = createBaseSyntheticEvent(eventType, nativeEvent);

    // timeStamp 作为 eventId， 用于判断是不是新的事件流
    if (syntheticStore[eventType].eventId !== nativeEvent.timeStamp) {
      // 新的事件流，初始化 store 数据
      initialSyntheticStore(eventType, nativeEvent.timeStamp);
    }

    if (syntheticStore[eventType].propagationStopped) {
      return;
    }

    return callback(syntheticEvent, ...restParams);
  };
}

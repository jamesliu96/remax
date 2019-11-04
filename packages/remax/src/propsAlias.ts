import kebabCase from 'lodash.kebabcase';
import Platform from './Platform';
import plainStyle from './utils/plainStyle';

function functionPropAlias(prop: string, isNative = false, platform?: string) {
  if (!isNative) {
    prop = prop.replace('Click', 'Tap');
  }

  if (platform === 'alipay') {
    return prop;
  }

  prop = prop.toLowerCase().replace('on', 'bind');

  return prop;
}

export function getAlias(prop: string, isNative = false, platform?: string) {
  prop = prop.replace('className', 'class').replace('ClassName', 'Class');

  if (prop.startsWith('on') || prop.startsWith('catch')) {
    return functionPropAlias(prop, isNative, platform);
  }

  return kebabCase(prop);
}

function getValue(prop: string, value: any): any {
  if (prop.toLowerCase().endsWith('style') && prop !== 'layerStyle') {
    return plainStyle(value);
  }

  return value;
}

export interface GenericProps {
  [key: string]: any;
}

export default function propsAlias(
  props: GenericProps,
  isNative = false,
  platform = Platform.current
) {
  if (!props) {
    return props;
  }

  const aliasProps: GenericProps = {};

  Object.keys(props).forEach(prop => {
    aliasProps[getAlias(prop, isNative, platform)] = getValue(
      prop,
      props[prop]
    );
  });

  return aliasProps;
}

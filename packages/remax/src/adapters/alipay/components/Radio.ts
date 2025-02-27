import factory from './factory';

export interface RadioProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

const Radio = factory<RadioProps>('radio');

export default Radio;

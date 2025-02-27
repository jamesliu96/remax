import factory from './factory';

export interface CheckboxProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  onChange?: (e: any) => void;
}
const Checkbox = factory<CheckboxProps>('checkbox');

export default Checkbox;

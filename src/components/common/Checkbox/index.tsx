import { CheckboxOptionType, CheckboxProps } from 'antd';

import * as S from './Checkbox';

interface CheckboxPropsInterface extends CheckboxProps {
  isGroup?: boolean;
  options?: CheckboxOptionType[];
}

export default function Checkbox({
  isGroup,
  options,
  ...rest
}: CheckboxPropsInterface) {
  if (isGroup) {
    return <S.CheckboxGroup options={options || []} />;
  }

  return <S.Checkbox {...rest} />;
}

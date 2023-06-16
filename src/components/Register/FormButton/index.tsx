import { ButtonProps } from 'src/types/register/types';
import Styled from '../styles';

const FormButton = ({
  label,
  color,
  backgroundColor,
  borderColor,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <Styled.Button
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onClick={onClick}
      disabled={disabled}
    >
      <Styled.ButtonLabel color={color}>{label}</Styled.ButtonLabel>
    </Styled.Button>
  );
};

export default FormButton;

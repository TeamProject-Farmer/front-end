import { ButtonProps } from 'src/types/register/types';
import Styled from '../styles';

const FormButton = ({
  label,
  color,
  backgroundColor,
  borderColor,
  onClick,
}: ButtonProps) => {
  return (
    <Styled.Button
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onClick={onClick}
    >
      <Styled.ButtonLabel color={color}>{label}</Styled.ButtonLabel>
    </Styled.Button>
  );
};

export default FormButton;

import { ButtonProps } from 'src/types';
import { Styled } from './styles';

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
      <Styled.Label color={color}>{label}</Styled.Label>
    </Styled.Button>
  );
};

export default FormButton;

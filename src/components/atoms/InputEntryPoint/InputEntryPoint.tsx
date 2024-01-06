import { Wrapper, StyledInput, ButtonStart } from './style';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { ChangeEventHandler } from 'react';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onExecute: () => void;
}

const InputEntryPoint = ({ value, onChange, onExecute }: Props) => {
  return (
    <Wrapper container item xs={6}>
      <StyledInput value={value} onChange={onChange} />
      <ButtonStart onClick={onExecute}>
        <PlayArrowIcon />
      </ButtonStart>
    </Wrapper>
  );
};

export default InputEntryPoint;

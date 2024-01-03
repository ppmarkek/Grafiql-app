import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { ButtonStart, Wrapper, StyledInput } from './style';
import { SetStateAction, useState } from 'react';

const InputEntryPoint = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper container item xs={6}>
      <StyledInput value={value} onChange={handleChange} />
      <ButtonStart onClick={() => console.log(value)}>
        <PlayArrowIcon />
      </ButtonStart>
    </Wrapper>
  );
};

export default InputEntryPoint;

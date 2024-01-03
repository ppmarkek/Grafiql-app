import React, { useContext } from 'react';
import { ValueContext } from '../../Context/ValueContext';
import { Wrapper, StyledInput, ButtonStart } from './style';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const InputEntryPoint = () => {
  const { inputEntryPoint, setInputEntryPoint } = useContext(ValueContext);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputEntryPoint(event.target.value);
  };

  return (
    <Wrapper container item xs={6}>
      <StyledInput value={inputEntryPoint} onChange={handleChange} />
      <ButtonStart onClick={() => console.log(inputEntryPoint)}>
        <PlayArrowIcon />
      </ButtonStart>
    </Wrapper>
  );
};

export default InputEntryPoint;

// import React, { useContext } from 'react';
// import { ValueContext } from '../../Context/ValueContext';
import { useDispatch } from 'react-redux';
import { Wrapper, StyledInput, ButtonStart } from './style';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {
  setEntry,
  useEntrySelector,
} from '../../../services/api/slices/entrySlice';
import { useGetQueryResponseQuery } from '../../../services/api/slices/querySlice';
import { useRequestBodySelector } from '../../../services/api/slices/requestSlice';

const InputEntryPoint = () => {
  const inputEntryPoint = useEntrySelector();
  const requestBody = useRequestBodySelector();
  const url = useEntrySelector();
  const dispatch = useDispatch();
  const { data } = useGetQueryResponseQuery({
    variables: { body: requestBody.requestBody, url: url.entry || '' },
  });
  console.log(data);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    dispatch(setEntry(event.target.value.toString()));
  };

  return (
    <Wrapper container item xs={6}>
      <StyledInput value={inputEntryPoint.entry} onChange={handleChange} />
      <ButtonStart onClick={() => console.log(inputEntryPoint)}>
        <PlayArrowIcon />
      </ButtonStart>
    </Wrapper>
  );
};

export default InputEntryPoint;

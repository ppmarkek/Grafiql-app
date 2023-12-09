import React, { useState, useEffect } from 'react';
import { StyledLink, Wrapper } from './style';
import { Grid } from '@mui/material';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper container $isSticky={isSticky}>
      <Grid item xs={6}>
        <StyledLink $width={'150px'} to={'/'}>
          Welcome page
        </StyledLink>
      </Grid>

      <Grid container item xs={6} justifyContent={'flex-end'} gap={'20px'}>
        <StyledLink $width={'100px'} to={'/signIn'}>
          Sign In
        </StyledLink>
        <StyledLink $width={'100px'} to={'/signOut'}>
          Sign Out
        </StyledLink>
      </Grid>
    </Wrapper>
  );
};

export default Header;

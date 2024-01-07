import { Typography } from '@mui/material';
import { styled } from '@mui/system';

type TextStyleProps = {
  $small?: boolean;
  $color?: string;
};

export const H1 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$color',
})(({ $color }: TextStyleProps) => ({
  fontFamily: 'Heebo, sansSerif',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '34px',
  lineHeight: '42px',
  color: $color || '#000',
}));

export const H2 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$color',
})(({ $color }: TextStyleProps) => ({
  fontFamily: 'Heebo, sansSerif',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '28px',
  lineHeight: '38px',
  color: $color || '#000',
}));

export const H3 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$color',
})(({ $color }: TextStyleProps) => ({
  fontFamily: 'Heebo, sansSerif',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '25px',
  lineHeight: '32px',
  color: $color || '#000',
}));

export const H4 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$color',
})(({ $color }: TextStyleProps) => ({
  fontFamily: 'Heebo, sansSerif',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '23px',
  lineHeight: '27px',
  color: $color || '#000',
}));

export const H5 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$color',
})(({ $color }: TextStyleProps) => ({
  fontFamily: 'Heebo, sansSerif',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '21px',
  lineHeight: '24px',
  color: $color || '#000',
}));

export const Bold = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$color' && prop !== '$small',
})(({ $color, $small }: TextStyleProps) => ({
  fontFamily: 'Heebo, sansSerif',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: $small ? '16px' : '18px',
  color: $color || '#000',
  lineHeight: '21px',
}));

export const Regular = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$color' && prop !== '$small',
})(({ $color, $small }: TextStyleProps) => ({
  fontFamily: 'Heebo, sansSerif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: $small ? '16px' : '18px',
  lineHeight: '21px',
  color: $color || '#000',
}));

export const Error = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$small',
})(({ $small }: TextStyleProps) => ({
  color: 'rgb(211, 47, 47)',
  fontFamily: 'Heebo, sansSerif',
  fontWeight: '400',
  fontSize: $small ? '16px' : '18px',
  lineHeight: '21px',
}));

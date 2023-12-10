import { Button } from '@mui/material';
import logo from '../../assets/icons8-google.svg';

const GoogleButton = ({
  googleButtonName,
  signInWithGoogleHandler,
}: {
  googleButtonName: string;
  signInWithGoogleHandler: () => void;
}) => {
  return (
    <Button
      type="button"
      onClick={signInWithGoogleHandler}
      sx={{ border: '1px solid', width: '80%', maxWidth: 360 }}
    >
      <img
        src={logo}
        className="logo"
        alt="Google logo"
        style={{
          height: '1.5rem',
          marginRight: '1rem',
        }}
      />
      {googleButtonName}
    </Button>
  );
};

export default GoogleButton;

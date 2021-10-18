import PropTypes from 'prop-types';
// material
import { Box, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

const LogoTitleStyle = {
  border:0,
  fontSize:"1.5em",
  marginLeft:15,
  lineHeight:1.6
}

export default function Logo({ sx }) {
  return (
    <Box display="flex">
      <Box component="img" src="/static/logo.png" sx={{ width: 40, height: 40, ...sx }} />
      <Typography style={LogoTitleStyle} ml={1} variant="h1">StartPage.site</Typography>
    </Box>
  )

}

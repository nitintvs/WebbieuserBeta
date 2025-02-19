import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
//   backgroundColor:
//     theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
    backgroundColor: grey[100]
}));

const StyledBox = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
  backgroundColor: grey[100]
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
//   backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  backgroundColor: grey[700],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      {/* <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box> */}
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        className="custom-swipeable-drawer"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        onClick={toggleDrawer(!open)}
        docked={false}
        swipeAreaWidth={drawerBleeding}
        // disableSwipeToOpen={false}
        disableDiscovery={true}
        ModalProps={{
          keepMounted: true,
          onBackdropClick: toggleDrawer(false)
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            pointerEvents: 'all',
            right: 0,
            left: 0,
            display: { xs: 'block', sm: 'block', md: 'none !important' }
          }}
          className="box-wrapper"
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.primary' }}>Filter</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
          className='box-warpper-content'
        >
          {/* <Skeleton variant="rectangular" height="100%"> */}
            {props.children}
          {/* </Skeleton> */}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
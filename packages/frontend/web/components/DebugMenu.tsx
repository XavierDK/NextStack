import React, { ReactElement, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/core/SpeedDial';
import { Build as BuildIcon, Timeline as XStateIcon } from '@material-ui/icons';
import SpeedDialAction from '@material-ui/core/SpeedDialAction';
import { AppEvent } from '../machines/app/appMachine';
import useAppService from '../hooks/useAppState';

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

type Action = {
  icon: ReactElement;
  name: string;
  event: AppEvent;
};

const actions: Action[] = [{ icon: <XStateIcon />, name: 'XState Inspect', event: { type: 'OPEN_XSTATE_INSPECT' } }];

const DebugMenu = (): ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [current, send] = useAppService();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return current.matches('debug.enabled') ? (
    <SpeedDial
      ariaLabel="Debug floating button"
      className={classes.speedDial}
      icon={<BuildIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => {
            send(action.event);
          }}
        />
      ))}
    </SpeedDial>
  ) : null;
};

export default DebugMenu;

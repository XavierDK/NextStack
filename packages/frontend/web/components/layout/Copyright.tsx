import { Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import infos from '../../constants/infos';
import Link from '../Link';

export default function Copyright(): ReactElement {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={infos.siteUrl}>
        {infos.companyName}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

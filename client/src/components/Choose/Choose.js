import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridContainer from '../../comps/Grid/GridContainer';
import GridItem from '../../comps/Grid/GridItem';

import ChooseAdm from './ChooseAdm';
import ChooseOrg from './ChooseOrg';
import ChooseCli from './ChooseCli';
import Navbar from '../Navbar';



export default function MediaCard() {


  return (
      <div>
          <Navbar />
          <GridContainer justify="center" spacing={4}>
              <GridItem xs={11} sm={11}>
            <ChooseAdm />
            </GridItem>
            <GridItem xs={11} sm={11}>
            <ChooseOrg />
            </GridItem>
            <GridItem xs={11} sm={11}>
            <ChooseCli />
            </GridItem>
          </GridContainer> 
      </div>

  );
}
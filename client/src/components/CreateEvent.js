import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import TextFields from "@material-ui/icons/TextFields";
import Location from "@material-ui/icons/LocationOn";
import Time from "@material-ui/icons/Event";



import Footer from "../comps/Footer/Footer.js";
import GridContainer from "../comps/Grid/GridContainer.js";
import GridItem from "../comps/Grid/GridItem.js";
import Header from "../comps/Header/Header.js";
import Button from "../comps/CustomButtons/Button.js";
import NavbarOrg from "../components/NavbarOrg.js";



import { Link } from "react-router-dom";

import image from "../assets/img/bg12.jpg";


import styles from "../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";



const useStyles = makeStyles(styles);



export default function Components(props) {
  const classes = useStyles();
  const linkColor = {
    color : 'white'
  }
  const type = [
    {title: 'Appearance or Singing'} , {title: 'Attraction'} , {title: 'Camp,Trip,Retreat'} ,
    {title: 'Class,Training,Workshop'} , {title: 'Concert or Performance'} , {title: 'Conference'} ,
    {title: 'Convention'} , {title: 'Dinner or Gala'} , {title: 'Festival or Flair'} ,
    {title: 'Game or Competition'} , {title: 'Meeting or Networking Event'} , {title: 'Other'} ,
    {title: 'Party or Social Gathering'} , {title: 'Race or Endurance Event'} , {title: 'Rally'} ,
    {title: 'Screening'} , {title: 'Seminar or Talk'} , {title: 'Tour'} ,
    {title: 'Tournament'} , {title: 'Trade SHow,Consumer Show'} , 
];
  const catégorie = [
    {title: 'Auto,Bot,Air'} , {title: 'Bussiness & Professional'} , {title: 'Charity And Causes'} ,
    {title: 'Community & Culture'} , {title: 'Family & Education'} , {title: 'Fashion & Beauty'} ,
    {title: 'Film,Media,Entertainement'} , {title: 'Food & Dring'} , {title: 'Governement & Politics'} ,
    {title: 'Health & Wellness'} , {title: 'Hobbies & Special Interest'} , {title: 'Home & Lifestyle'} ,
    {title: 'Music'} , {title: 'Other'} , {title: 'Performing & Visual Arts'} ,
    {title: 'Religion & Spirituality'} , {title: 'School Activities'} , {title: 'Science & Technology'} ,
    {title: 'easonal & Holiday'} , {title: 'Sports & Fitness'} , {title: 'Travel & Outdoor'} ,
];
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  return (
    <div
          className={classes.navigation}
          style={{ backgroundImage: "url(" + image + ")" }}
        >
    <div className={classes.section}>
      <div className={classes.container}>
        <NavbarOrg />       
         <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <GridItem>
            <TextFields style={{fontSize: 70}}>
            </TextFields>
            <Typography>
              Nommez votre événement et dites aux spectateurs pourquoi ils devraient venir. Ajoutez des détails qui mettent en valeur ce qui le rend unique.
            </Typography>
            </GridItem>
            
            <GridItem>
            <TextField id="filled-basic" label="Event Title" variant="filled" style={{ width: 600 , marginBottom: 10 , marginTop: 10 }} />
            </GridItem>

            <GridItem>
            <Autocomplete
             id="combo-box-demo"
             options={type}
             getOptionLabel={(option) => option.title}
             style={{ width: 300 , marginTop: 10 , marginBottom: 10 }}
             renderInput={(params) => <TextField {...params} label="Type" variant="outlined" />}
            />
            </GridItem>

            <GridItem>
            <Autocomplete
             id="combo-box-demo"
             options={catégorie}
             getOptionLabel={(option) => option.title}
             style={{ width: 300 , marginTop: 10 , marginBottom: 10 }}
             renderInput={(params) => <TextField {...params} label="Catégorie" variant="outlined" />}
            />
            </GridItem>

            <GridItem>
            <TextField id="filled-basic" label="Organizer" variant="filled" style={{ width: 600 , marginTop: 10 }} />
            </GridItem>

          
        
        

        <Divider  style={{marginTop: 50 , marginBottom: 50 , marginLeft: 40 , marginRight: 40 , color: 'black'}}/>

        <div>
      
            
               <GridItem>
                    <Location style={{fontSize: 70}}>
                    </Location>
                    <Typography>
                    Aidez les gens de la région à découvrir votre événement et faites savoir aux participants où se présenter.
                    </Typography>
               </GridItem>

               <GridItem>
                    <Button variant="contained">
                      Lieu
                    </Button>
                    <Button variant="contained" >
                      Événement en ligne
                    </Button>
                    <Button variant="contained" >
                      A annoncer
                    </Button>
               </GridItem>
               
            
      
        </div>

        <Divider style={{marginTop: 50 , marginBottom: 50 , marginLeft: 40 , marginRight: 40 , color: 'black'}} />
  
        
        
        <GridItem >
              <Time style={{fontSize: 70}}>
              </Time>
              <Typography>
              Informez les spectateurs du début et de la fin de votre événement afin qu'ils puissent planifier leur participation.
              </Typography>
        </GridItem>

        <GridItem>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Début De l'événement"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="Heure de début"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                    />
                  </Grid>
              </MuiPickersUtilsProvider>
        </GridItem> 

        <GridItem>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Fin de l'événement"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="Heure de fin"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                    />
                  </Grid>
              </MuiPickersUtilsProvider>
        </GridItem>

        <GridItem>
          <Button variant="contained" color="primary" style={{fontSize: 15 , marginTop: 50 , marginLeft: 550}}>
            Create
          </Button>        
        </GridItem>   
  
      </GridItem>
      </GridContainer>

      <div>
        <Footer />
      </div>

      </div>
      </div>
      </div>
    
  );
}
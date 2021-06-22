import React, { useState, useContext } from 'react';
import {Paper, Grid, makeStyles} from '@material-ui/core';
import MemShow from './MemShow';
import { MemContext } from '../../context/MemContextProvider';



const Regular = () => {

    const {mems} = useContext(MemContext);
    const useStyles = makeStyles((theme)=>({
        root: {
             flexGrow:1,
        },
        paper: {
             margin: '1%',
             width: '23%'
        },
        control: {
             padding: theme.spacing(2),
        }
    }))

    
    const classes = useStyles();

    const [spacing,setSpacing] = useState(4);

    return mems.length ? (
        <div className="MemsListKamil">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                {mems.map(mem => {
                return (
                <Paper className={classes.paper}>
                       <MemShow mem={mem} key={mem.id}/>
                </Paper>)
                })
                }
                </Grid>
                </Grid>
                </Grid>
        </div>
    ) : (
        <div className="NoMems">
           Niestety ale obecnie nie posiadamy memów w bazie :(
        </div>
    )
}




export default Regular
import React, { useContext } from 'react';
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
             width: '75%'
        },
        control: {
             padding: theme.spacing(2),
        }
    }))

    
    const classes = useStyles();

   

    return mems.length ? (
        <div className="MemsListKamil">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Grid container justify="center" >
                        {mems.map((mem,index) => {
                            console.log(mem);
                            const box = mem.captions;
                            return (
                                <Paper className={classes.paper} key={index}>
                                        <MemShow mem={mem} id={mem.id} box={box} />            
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
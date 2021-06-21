import React,{ useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import {makeStyles} from '@material-ui/core/styles';
import { DialogActions } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const NewmemForm = ({addMems,templates}) => {
    const useStyles = makeStyles((theme)=>(
        {
            container: {
                display: 'flex',
                flexWrap: 'wrap'
            }
        }
    ));
    const classes = useStyles();
    const [title,setTitle] = useState('');
    const [title1,setTitle1] = useState('');
    const [title2,setTitle2] = useState('');
    const [open,setOpen] = useState(false);
    const [img,setImg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addMems(title,img);
        setTitle('');
        setImg('');
        
    }
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (e) => {
        e.preventDefault();
        setImg(e.target.value);       
    }

    return(
        <div className="FormKamila">
            <Button onClick= {handleClickOpen}>OPEN</Button>
            <Dialog open={open} className="KamilaDialog">
                <DialogTitle> Dodaj Mema Mistrzu :p</DialogTitle>
                <DialogContent>

                    <form onSubmit={handleSubmit} className={classes.container}>
                        <FormControl>
                            <InputLabel>Nazwa Mema:</InputLabel> 
                            <TextField  type="text" value={title}  onChange={(e) => setTitle(e.target.value)} required/>
                            <TextField  type="text" value={title1}  onChange={(e) => setTitle1(e.target.value)} required/>      
                            <TextField  type="text" value={title2}  onChange={(e) => setTitle2(e.target.value)} required/>
                                <Select native value={img} onChange={handleChange} input={<Input id="demo-dialog-native"/>}> 
                                    {templates.map(template => {
                                        return (
                                            <option value={template.url}>{template.name}</option>
                                        )
                                     })}
                                </Select>
                            <img className="BasiImg" src={img} alt="new"/>
          
                        <Button type="submit" value="add mem" variant="contained" color="primary" size="medium">ADD</Button>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>      
                    <Button onClick={handleClose} color="primary">CLOSE</Button>
                </DialogActions>     
            </Dialog>
        </div>
        
    )
}
export default NewmemForm
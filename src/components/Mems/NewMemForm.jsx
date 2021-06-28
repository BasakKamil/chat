import { DialogActions, FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useContext, useEffect, useState } from 'react';
import { MemContext } from '../../context/MemContextProvider';
import gif from '../../images/loga/giphy.gif';
import Buttons from '../Form/Buttons';
import MemIndexContext from '../../context/MemeIndexProvider';

const NewmemForm = () => {
    const {dispatch} = useContext(MemContext);
    const {upvotes,downvotes} = useContext(MemContext);
    // const [memeIndex,changeIndex] = useContext(MemIndexContext);
    const [memeIndex,setMemeIndex] = useState(0);

    const useStyles = makeStyles((theme)=>(
        {
            container: {
                display: 'flex',
                flexWrap: 'wrap',
                margin: '0'
            },
            root: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                border: 0,
                borderRadius: 3,
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                color: 'white',
                height: 48,
                padding: '0 30px',
                margin: 'auto',
                textAlign: "center",
                zindex: '999999999999999'
              },
              input: {
                textAlign: "center",
                width: '100%',
                top: '-32px',
                fontSize: '18px',
                display: 'block'
              },
              skip: {
                  textAlign: 'center',
              },
              new: {
                display: 'block',
                position: 'relative'
              },
              text: {
                
                borderRadius: '10px',
                padding: '5px',
                margin: '1%',
              },
              img: {
                  width: '100%'
              }

        }
    ));
   
    const classes = useStyles();
    const [title,setTitle] = useState('');
    const [open,setOpen] = useState(false);
    const [img,setImg] = useState('');
    const [memes,setMemes] =useState([]);
    const [captions,setCaptions] = useState([]);
    // const [boxes, setBoxes] = useState('');
  
    useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes").then(x=>
           x.json().then(response =>
               {    
                   const _memes = response.data.memes;
                   setMemes(_memes);
                   shuffleMemes(_memes);
               }
            )
      );
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_MEM', 
            mem: {
                title,
                img,
                captions,
                upvotes : 10,
                downvotes : 2
            }});
        setTitle('');
        setImg('');
        generateMem();
        
    }

    const generateMem = () => {
        const currentMeme = memes[memeIndex];
        console.log(currentMeme);
        const formData = new FormData();

        formData.append('username', 'KamilB'); 
        formData.append('password', 'Basak020691'); 
        formData.append('template_id', currentMeme.id); 
        captions.forEach((c,index) => formData.append(`boxes[${index}][text]`,c));

        fetch('https://api.imgflip.com/caption_image',{
            method: 'POST',
            body: formData
        }).then(res =>{
            console.log(res);
        });
    }

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setImg(e.target.value);  
    //     setBox_count(e.target.box_count);           
    //     console.log(img,box_count);
    // }
   
    const shuffleMemes = (array) => {
        for(let i = array.length - 1; i>0; i--){
            const j = Math.floor(Math.random()*i);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    const next = (e) => {
        e.preventDefault();
         setMemeIndex(memeIndex + 1);
    }
    const back = (e) => {
        setMemeIndex(memeIndex - 1);
    }
   
    useEffect(()=>{
        if(memes.length){
            setCaptions(Array(memes[memeIndex].box_count).fill(''));
        }       
    },[memeIndex,memes]);

    useEffect(()=>{
        setCaptions(captions);
    },[captions]);

    const updateCaption = (e,index) => {
        setImg(memes[memeIndex].url);
        const text = e.target.value || '';
        setCaptions(
            captions.map((caption,_index)=> {
                if(index === _index){
                    return text;
                } else {
                    return caption
                }
            })
        )
    }
    

    return( 
        memes.length ? 
        captions.length ?
        <div className="FormKamila">
             <Button onClick= {handleClickOpen} className={classes.root} >DODAJ MEMA</Button>
             <Dialog open={open} className="KamilaDialog">
                    <DialogTitle> Dodaj Mema Mistrzu :p</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className={classes.container}>
                        <FormControl className="kamilatext">
                        <InputLabel className={classes.input}>Nazwa Mema:</InputLabel> 
                        <TextField  className={classes.text} type="text" value={title}  onChange={(e) => setTitle(e.target.value)} required/>
                             <img className={classes.img} src={memes[memeIndex].url} alt={memes[title]}/> 

                                <Buttons next={next} back={back} classes={classes} memeIndex={memeIndex} memes={memes}/>
                
                             <div className="KamilaDialogMap">
                                { 
                                    captions.map((c,index) => {
                                        return(
                                        <DialogContent className={classes.new} key={index} >
                                            <InputLabel>Tekst {index +1}</InputLabel> 
                                            <TextField className={classes.text} key={index} onChange={(e)=> updateCaption(e, index) } />
                                        </DialogContent>
                                        )
                                        })
                                }
                                </div>
                        </FormControl>
                        <Button onClick={generateMem} type="submit" value="add mem" variant="contained" color="primary" size="medium">Dodaj</Button>
                    </form>
                </DialogContent>    
                <DialogActions>      
                    <Button onClick={handleClose} color="primary">CLOSE</Button>
                </DialogActions>          
             </Dialog>
        </div>
        : <></>
        : <>
          <Button onClick= {handleClickOpen} className={classes.root} >DODAJ MEMA</Button>
          <Dialog open={open} className="KamilaDialog">
            <img src={gif} frameBorder="0" className="KamilaGif" alt="Gif" />
          </Dialog>
          <DialogActions>      
                <Button onClick={handleClose} color="primary">CLOSE</Button>
          </DialogActions>  
          </>
        // 
           
        //     
        //        

                    
                           
        //                         <Select native onChange={handleChange} input={<Input id="demo-dialog-native"/>}> 
        //                             {memes.map(mem => {
        //                                 // console.dir(template);
        //                                 return (
        //                                     <option value={mem.url} box_count={mem.box_count}>
        //                                        {mem.name} z {mem.box_count} Komentarzami            
        //                                     </option>
        //                                 )
        //                              })}
        //                         </Select>
        
        //                     <img className="BasiImg" src={img} alt=""/>
              
                        
                 
               
        //    
       
        
    )
}
export default NewmemForm
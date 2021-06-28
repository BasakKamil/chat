
import { makeStyles } from '@material-ui/core/styles';

const Mem = ({mem,box}) => {

    const useStyles = makeStyles((theme)=>(
        {
            div: {
                position : 'relative',
                width: '100%'
            },
            img: {
                position : 'relative',
                width: '100%',
                left: '0',
                height: 'auto',
                top: '0',
                zIndex: '1'
            }
            
        }
    ));
    const moje = useStyles();

    return box.length ? (
        <div className={moje.div}>
             <img alt={mem.title} src={mem.img} className={moje.img}/>
             <div className="KamciaWewnatrz">
             {box.map((Text,index) => {
                 const nr = index +1 ;
                 return(
                     <p className="p" style={{marginTop:`${nr}4%`}} key={index}>{Text}</p>      
                 )
             })}
              </div>
        </div>
       
       
    ) : (
        <div><p>Nic nie napisales</p></div>
    )
}
export default Mem
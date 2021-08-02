import React,{useState} from 'react'

import MultiImageInput from './MultiImageInput';
// import renderPhotos from './MultiImageInput';
import Button from "@material-ui/core/Button";


function MultiImageInputRender() {
    const [count,setCount] = useState(1);
    const uploadHandler = () => {

    };
    return (
        <div>
            <ul>
            {
              [...Array(count)].map(()=><MultiImageInput/>)
              
            }
            </ul>
            {/* <ul>
              {[...Array(count)].map(()=><renderPhotos/>)}   
            </ul> */}
            <div>
                <Button
                onClick={()=>setCount(count+1)}
                variant="contained"
                color="primary"
                size="small"
                >
                Add User
                </Button>
            </div>
            
            <div>
            <Button
                onClick={()=>{
                    if(count>=1)
                    setCount(count-1);
                }}
                variant="contained"
                color="primary"
                size="small"
                >
                Remove User
                </Button>
            </div>
            <div>
            <Button
                onClick={uploadHandler}
                variant="contained"
                color="primary"
                size="small"
                >
                Upload
                </Button>
            </div>
        </div>
    )
}

export default MultiImageInputRender

import React from "react";
import Button from '@material-ui/core/Button';
const MyButton = (props) =>{
    const { color, size, variant, text } = props;
    return(
        <Button variant={variant ? variant : 'contained'} color={color ? color : 'primary'} size={size? size : 'medium'} href={''}>
            {text? text : 'My button'}
        </Button>
    )
};

export default MyButton;

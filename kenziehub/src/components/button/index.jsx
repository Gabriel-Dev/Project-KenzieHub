import { Button } from "./style";

export function ButtonComponent ({ name , type , className , onClick }){
    return(
    <Button onClick={onClick} type={type} className={className}>
        {name}
    </Button>
    )
}
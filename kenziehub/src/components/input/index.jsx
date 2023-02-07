import { Label } from "./style";

export function Input({label, name , type , placeholder , register , eye, disabled}){
    return(
    <Label htmlFor={name}>{label}
        <input name={name} type={type} placeholder={placeholder} {...register} disabled={disabled} />
        {eye}
    </Label>
    )
}
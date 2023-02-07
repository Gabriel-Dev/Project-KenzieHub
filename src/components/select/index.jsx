import { Label } from "./style";

export function Select({register}){
    return(
        <Label htmlFor="course_module"> Selecionar módulo
            <select name="course_module" {...register} >
                <option value="">Selecione seu módulo</option>
                <option value="Módulo 1">Módulo 1</option>
                <option value="Módulo 2">Módulo 2</option>
                <option value="Módulo 3">Módulo 3</option>
                <option value="Módulo 4">Módulo 4</option>
                <option value="Módulo 5">Módulo 5</option>
                <option value="Módulo 6">Módulo 6</option>
            </select>
        </Label>
    )
}
export function SelectStatus({register}){
    return(
        <Label htmlFor="status"> Selecionar Status
            <select name="status" {...register} >
                <option value="">Selecione seu status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
        </Label>
    )
}
import { Card } from "./style";

export function CardComponent({ title, status, onClick}) {
    return (
        <Card onClick={onClick}>
            <h3>{title }</h3>
            <p>{status }</p>
        </Card>
    )
}
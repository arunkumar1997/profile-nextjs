import { Card, Button } from "react-bootstrap"

const Technologies = ({imgPath, altName}) => {
    return(
        <>
        <Card className="shadow text-center m-auto border-0 py-5"  >
            <img className="card-img-top" src={imgPath} alt={altName} width={80} height={90} />
            <span className="mt-2">{altName}</span>
        </Card>
        </>
    )
}


export default Technologies;
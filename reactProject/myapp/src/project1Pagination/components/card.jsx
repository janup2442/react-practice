
import '../project1.css'

export default function Card({item}){
    const text = "this is product 1"
    return(
        <>
            <div className="card">
                {item}
            </div>
        </>
    )
}
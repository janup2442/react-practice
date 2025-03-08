import Card from "./card"
export default function PaginationGrid({ objectList }) {
    // const [itemList, setList] = useState([])
    return (
        <>
            <div className="paginationGrid">
                {
                    objectList.map(item=><Card key={item.id} item={item.text}/>)
                }
            </div>
        </>
    )
}
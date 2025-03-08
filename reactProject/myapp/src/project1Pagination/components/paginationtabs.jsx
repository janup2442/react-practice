export default function PaginationTabs({ totalPages=10 , onPageChange ,currentPage}) {
    const pages = [];
    const generatePagesTabs = (totalPages)=>{
        for(let i=1;i<=totalPages;i++){
            pages.push(
                i
            )
        }
        return pages
    }
    return (
        <>
            <div className="paginationButtons">
                <button type="button" onClick={()=>onPageChange(currentPage-1)} disabled={currentPage===1}>Prev</button>
                {
                    generatePagesTabs(totalPages).map(item=><button key={item} className={currentPage==item?'active':null} onClick={()=>onPageChange(item)} type="button">{item}</button>)
                }
                <button type="button" onClick={()=>onPageChange(currentPage+1)} disabled={currentPage===totalPages}>  Next</button>
            </div>
        </>
    )
}
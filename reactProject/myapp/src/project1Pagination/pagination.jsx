import { useState } from "react";
import testData from "./data.js";
import PaginationTabs from "./components/paginationtabs.jsx";
import PaginationGrid from "./components/paginationGrid.jsx";


export default function Pagination() {
    const [currentPage , setCurrentPage] = useState(1);
    const dataPerPage = 10;
    const changePage = (currentPage)=>{
        setCurrentPage(currentPage);
    }
    const lastindex = (currentPage-1)*dataPerPage;
    const dataListToShow = testData.slice(lastindex, lastindex+10);

    return (
        <>
            <div className="pagination">
                <PaginationGrid objectList={dataListToShow}/>
                <PaginationTabs totalPages={Math.ceil(testData.length/dataPerPage)} onPageChange={changePage} currentPage={currentPage}/>
            </div>
        </>
    )
}







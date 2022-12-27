import React, {useEffect, useState} from 'react';
import style from "./Pagination.module.css";

type PaginationPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    sectionSize: number
}

export const Pagination = (props: PaginationPropsType) => {

    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let sectionCount = Math.ceil(pagesCount / props.sectionSize)
    let [sectionNumber, setSectionNumber] = useState(1)
    let leftSectionBorder = (sectionNumber - 1) * props.sectionSize + 1
    let rightSectionBorder = sectionNumber * props.sectionSize

    useEffect(() => setSectionNumber(Math.ceil(props.currentPage / props.sectionSize)), [props.currentPage]);
    return (
        <div>
            {sectionNumber > 1 && <button onClick={() => setSectionNumber(sectionNumber - 1)}>PREV</button>}
            {pages.filter(page => page >= leftSectionBorder && page <= rightSectionBorder).map(page => {
                return <span className={props.currentPage === page ? style.selected : ''}
                             onClick={() => props.onPageChanged(page)}>{page}</span>
            })}
            {sectionCount > sectionNumber && <button onClick={() => setSectionNumber(sectionNumber + 1)}>NEXT</button>}
        </div>
    );
};

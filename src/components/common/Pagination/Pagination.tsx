import React from 'react';
import style from "./Pagination.module.css";

type PaginationPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Pagination = (props: PaginationPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(page => {
                return <span className={props.currentPage === page ? style.selected : ''}
                             onClick={() => props.onPageChanged(page)}>{page}</span>
            })}
        </div>
    );
};

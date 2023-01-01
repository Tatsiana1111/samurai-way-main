import React from 'react'

import style from './Error404.module.css'

export const Error404 = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>404: PAGE NOT FOUND</h1>
            <img
                className={style.image}
                src="https://images.all-free-download.com/images/graphiclarge/error_404_page_not_found_6845510.jpg"
            />
        </div>
    )
}
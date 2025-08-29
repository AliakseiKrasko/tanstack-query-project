import s from './pagination.module.css'


type Props = {
    current: number
    pagesCount: number
    changePageNumber: number
    isFetching: boolean
}

export const Pagination = ({ current, pagesCount, changePageNumber, isFetching }: Props) => {
    return (
        <div className={s.container}>
            <PaginationNav current={current} pagesCount={pagesCount} onChange={changePageNumber} /> {isFetching && '⌛'}
        </div>
    )
}
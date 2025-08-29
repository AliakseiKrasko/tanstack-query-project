import s from './pagination-nav.module.css'

type Props = {
    current: number
    pagesCount: number
    onChange: (page: number) => void
}

const SIBLIND_COUNT = 10

export const PaginationNav = ({ current, pagesCount, onChange }: Props) => {
    const pages = getPaginationPage(current, pagesCount, SIBLIND_COUNT)

    return (
        <div>
            {pages.map((item, idx) => (
                item === '...' ? (
                    <span className={s.ellipsis} key={`ellipsis -${idx}`}>
                        ...
                    </span>
                ) : (
                    <button
                        key={item}
                        className={item === current ? `${s.pageButton} ${s.pageButtonActive}` : s.pageButton}
                        onClick={() => item !== current && onChange(Number(item))}
                        disabled={item === current}
                        type="button"
                    >
                        {item}
                    </button>
                )
            ))}
        </div>    
    )
}
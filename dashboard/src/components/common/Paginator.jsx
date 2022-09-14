import style from './Paginator.module.css';

const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const currPage = props.currentPage;
    const currPageFirst = ((currPage - 5) < 0) ? 0 : currPage - 5;
    const currPageLast = currPage + 5;
    const slicedPages = pages.slice(currPageFirst, currPageLast);

    return (
        <div className={style.page}>
            {slicedPages.map(p => <div key={p}
                className={props.currentPage === p ? style.activePage : style.notActive}
                onClick={() => { props.getCurrentPage(p) }}>{p}</div>)}
        </div>
    )
}

export default Paginator;
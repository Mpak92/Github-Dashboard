const MainPageTable = (props) => {
    return (<>
        {props.repositories.map((rep, index) => {
            return <tr key={rep.id}>
                <td>{index + 1 + ((props.currentPage - 1) * 10)}</td>
                <td>{rep.name}</td>
                <td>{rep.stargazers_count}</td>
                <td>{rep.pushed_at}</td>
                <td>{rep.html_url}</td>
            </tr>
        })}
    </>)
}

export default MainPageTable;
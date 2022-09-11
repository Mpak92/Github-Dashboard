import style from './RepositoryCard.module.css'
import photo from './../../assets/images/PhotoPlaceholder.jpg'

const RepositoryCard = ({ repositoryCard, ...props }) => {
    return (
        <div className={style.container}>
            <div className={style.hat}>
                <div className={style.name}>{repositoryCard.name}</div>
                <div className={style.stars}>Количество звезд на github: {repositoryCard.stargazers_count}</div>
                <div className={style.data}>Дата последнего коммита: {repositoryCard.pushed_at}</div>
            </div>
            <div className={style.profile}>
                <div className={style.photo}>
                    <img src={repositoryCard.owner?.avatar_url || photo} alt='owner' />
                </div>
                <div className={style.description}>
                    Краткое описание репозитория:
                    <div>{repositoryCard.description}</div>
                </div>
                <div className={style.nick}>{repositoryCard.owner?.login}</div>
            </div>
            <div className={style.lists}>
                <div className={style.languages}>
                    Список используемых языков в репозитории:
                    {Object.entries(props.listOfLanguages).map((item, index) => {
                        return <div key={index}>{item[0]}: {item[1]}</div>
                    })}
                </div>
                <div className={style.contributers}>
                    10 наиболее активных контрибьютеров:
                    {props.contributors.map((item, index) => {
                        if (index <= 9) return <div key={index}>{item.login}: {item.contributions}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default RepositoryCard;
import style from './RepositoryCard.module.css'
import photo from './../../assets/images/PhotoPlaceholder.jpg'

const RepositoryCard = (props) => {
    return (
        <div className={style.container}>
            <div className={style.hat}>
                <div className={style.name}>name</div>
                <div className={style.stars}>Количество звезд на github:</div>
                <div className={style.data}>Дата последнего коммита:</div>
            </div>
            <div className={style.profile}>
                <div className={style.photo}>
                    <img src={photo} alt='owner' />
                </div>
                <div className={style.description}>Краткое описание репозитория</div>
                <div className={style.nick}>Nickname владельца</div>
            </div>
            <div className={style.lists}>
                <div className={style.languages}>Список используемых языков в репозитории</div>
                <div className={style.contributers}>10 наиболее активных контрибьютеров</div>
            </div>
        </div>
    )
}

export default RepositoryCard;
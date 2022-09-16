import style from './RepositoryCard.module.css';
import photo from './../../assets/images/PhotoPlaceholder.jpg';
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux";
import { setRepositoryCard, setListOfLanguages, setContributors } from './../../redux/repositoryCard-reducer';
import { useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import { useParams } from "react-router-dom";
import Preloader from "../common/Preloader";

const RepositoryCard = () => {
    const repositoryCard = useSelector(state => state.repCard.repositoryCard);
    const listOfLanguages = useSelector(state => state.repCard.listOfLanguages);
    const contributors = useSelector(state => state.repCard.contributors);

    const dispatch = useDispatch();

    const params = useParams();

    let { data, error, loading } = useFetch(`https://api.github.com/repos/${params.repOwner}/${params.repName}`);
    let { data: lang, error: erLang, loading: langLoad } = useFetch(data?.languages_url);
    let { data: contrib, error: erCont, loading: contLoad } = useFetch(data?.contributors_url);

    useEffect(() => {
        if (data) dispatch(setRepositoryCard(data));
    }, [data])

    useEffect(() => {
        if (lang) dispatch(setListOfLanguages(lang));
    }, [lang])

    useEffect(() => {
        if (contrib) dispatch(setContributors(contrib));
    }, [contrib])

    if (loading || langLoad || contLoad) return <Preloader />;
    if (error) console.log(error);
    if (erLang) console.log(erLang);
    if (erCont) console.log(erCont);

    return (
        <div className={style.container}>
            <div className={style.hat}>
                <div className={style.name}>{repositoryCard.name}</div>
                <div className={style.stars}>Количество звезд на github: {repositoryCard.stargazers_count}</div>
                <div className={style.data}>Дата последнего коммита: {moment(repositoryCard.pushed_at).format('DD.MM.YYYY HH:mm')}</div>
            </div>
            <div className={style.profile}>
                <div className={style.owner}>
                    <div>
                        <img src={repositoryCard.owner?.avatar_url || photo} alt='owner' />
                    </div>
                    <div className={style.nick}>{repositoryCard.owner?.login}</div>
                </div>
                <div className={style.description}>
                    <div className={style.titul}>Краткое описание репозитория:</div>
                    <div>{repositoryCard.description}</div>
                </div>
            </div>
            <div className={style.lists}>
                <div className={style.languages}>
                    <div className={style.titul}>Список используемых языков в репозитории:</div>
                    {Object.entries(listOfLanguages).map((item, index) => {
                        return <div key={index}>{item[0]}: {item[1]}</div>
                    })}
                </div>
                <div className={style.contributers}>
                    <div className={style.titul}>10 наиболее активных контрибьютеров:</div>
                    {contributors.map((item, index) => {
                        if (index <= 9) return <div key={index}>{item.login}: {item.contributions}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default RepositoryCard;
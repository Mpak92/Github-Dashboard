import { useSelector, useDispatch } from "react-redux";
import RepositoryCard from "./RepositoryCard";
import { setRepositoryCard, setListOfLanguages, setContributors } from './../../redux/repositoryCard-reducer';
import { useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import { useParams } from "react-router-dom";
import Preloader from "../common/Preloader";

const RepositoryCardContainer = () => {
    const repositoryCard = useSelector(state => state.repCard.repositoryCard);
    const listOfLanguages = useSelector(state => state.repCard.listOfLanguages);
    const contributors = useSelector(state => state.repCard.contributors);

    const dispatch = useDispatch();

    const params = useParams();

    let { data, error, loading } = useFetch(`https://api.github.com/repos/${params.repOwner}/${params.repName}`);
    let { data: lang } = useFetch(data?.languages_url);
    let { data: contrib } = useFetch(data?.contributors_url);

    useEffect(() => {
        if (data) dispatch(setRepositoryCard(data));
    }, [data])

    useEffect(() => {
        if (lang) dispatch(setListOfLanguages(lang));
    }, [lang])

    useEffect(() => {
        if (contrib) dispatch(setContributors(contrib));
    }, [contrib])

    if (loading) return <Preloader />;
    if (error) console.log(error);

    return (
        <RepositoryCard repositoryCard={repositoryCard}
            listOfLanguages={listOfLanguages}
            contributors={contributors} />
    )
}

export default RepositoryCardContainer;
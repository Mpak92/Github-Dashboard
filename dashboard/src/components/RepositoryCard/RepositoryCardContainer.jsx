import { connect } from "react-redux";
import RepositoryCard from "./RepositoryCard";
import { setRepositoryCard, setListOfLanguages, setContributors } from './../../redux/repositoryCard-reducer';
import { useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import { useParams } from "react-router-dom";
import Preloader from "../common/Preloader";

const RepositoryCardContainer = (props) => {
    const params = useParams();

    let { data, error, loading } = useFetch(`https://api.github.com/repos/${params.repOwner}/${params.repName}`);
    let { data: lang } = useFetch(data?.languages_url);
    let { data: contrib } = useFetch(data?.contributors_url);

    useEffect(() => {
        if (data) props.setRepositoryCard(data);
    }, [data])

    useEffect(() => {
        if (lang) props.setListOfLanguages(lang);
    }, [lang])

    useEffect(() => {
        if (contrib) props.setContributors(contrib);
    }, [contrib])

    if (loading) return <Preloader />;
    if (error) console.log(error);

    return (
        <RepositoryCard repositoryCard={props.repositoryCard}
            listOfLanguages={props.listOfLanguages}
            contributors={props.contributors} />
    )
}

const mapStateToProps = (state) => {
    return {
        repositoryUrl: state.repCard.repositoryUrl,
        repositoryCard: state.repCard.repositoryCard,
        listOfLanguages: state.repCard.listOfLanguages,
        contributors: state.repCard.contributors
    }
};

export default connect(mapStateToProps, { setRepositoryCard, setListOfLanguages, setContributors })(RepositoryCardContainer);;
import { connect } from "react-redux";
import RepositoryCard from "./RepositoryCard";

const RepositoryCardContainer = (props) => {
    return (
        <RepositoryCard />
    )
}

const mapStateToProps = (state) => {
    return {
        
    }
};

export default connect(mapStateToProps, { })(RepositoryCardContainer);;
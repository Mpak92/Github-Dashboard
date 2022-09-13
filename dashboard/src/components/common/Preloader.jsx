import loader from '../../assets/images/loader.gif';
import style from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={style.load}>
            <img alt="loading" src={loader}></img>
        </div>
    )
}

export default Preloader;
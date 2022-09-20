import { useForm } from "react-hook-form";
import styles from './MainPage.module.css';

const MainPageForm = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        props.getSearchName(data.searchByName);
    }
 
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('searchByName')}
                    type="text"
                    placeholder="Please enter a repository name to searching by name"
                    className={styles.search}
                    defaultValue={props.searchName} />
                <button className={styles.button}>Поиск</button>
            </div>
        </form>
    )
}

export default MainPageForm;
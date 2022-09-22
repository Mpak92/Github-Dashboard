import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from './MainPage.module.css';

const MainPageForm = (props) => {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        props.getSearchName(data.searchByName);
    }
    const searchName = watch('searchByName');

    useEffect(() => {
        const timeOut = setTimeout(() => props.getSearchName(searchName), 1500)
        return () => clearTimeout(timeOut);
    }, [searchName]);

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
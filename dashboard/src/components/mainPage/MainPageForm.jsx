import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import styles from './MainPage.module.css';

const MainPageForm = (props) => {
    const { register, handleSubmit, watch, control } = useForm();
    const onSubmit = data => {
        props.getSearchName(data.searchByName);
    }

    // const searchByName = useWatch({
    //     name: 'searchByName',
    //     control
    // });

    // useEffect(() => {
    //     props.getSearchName(searchByName);
    //     console.log(searchByName);
    // }, [searchByName]);   

    // useEffect(() => {
    //     const subscription = watch((value) => props.getSearchName(value.searchByName));
    //     return () => subscription.unsubscribe();
    // }, [watch]);    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('searchByName')}
                    type="text"
                    placeholder="Please enter a repository name to start searching by name"
                    className={styles.search}
                    defaultValue={props.searchName} />
            </div>
        </form>
    )
}

export default MainPageForm;
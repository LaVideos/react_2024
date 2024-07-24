import React, {FC} from 'react';
import styles from "./tags-component.module.css";

interface TagsTypes{
    tag: string;
}


const TagsComponent:FC<TagsTypes> = ({tag}) => {
    return (
        <div className={styles.productTag}>{tag}</div>
    );
};

export default TagsComponent;

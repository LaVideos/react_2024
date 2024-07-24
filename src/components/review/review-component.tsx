import React, {FC} from 'react';
import styles from "./review-component.module.css";
import {IReview} from "../../types/IProduct";

interface ReviewTypes{
    review:IReview
}

const ReviewComponent:FC<ReviewTypes> = ({review}) => {
    return (
        <div className={styles.reviewItem}>
            <div className={styles.reviewHeader}>
                <span className={styles.reviewRating}>⭐ {review.rating.toFixed(1)}</span>
                <span className={styles.reviewDate}>{review.date}</span>
            </div>
            <div className={styles.reviewComment}>{review.comment}</div>
            <div className={styles.reviewComment}><strong>{review.reviewerName}</strong> ({review.reviewerEmail})</div>
        </div>
    );
};

export default ReviewComponent;

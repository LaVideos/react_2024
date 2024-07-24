import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../types/IProduct';
import styles from './product-detail-component.module.css';
import { services } from '../../services/services';
import ReviewComponent from '../review/review-component';
import { useAppLocation } from '../../hooks/useAppLocation';
import TagsComponent from "../tags/tags-component";

const ProductDetailComponent = () => {
    const appLocation = useAppLocation<IProduct>();
    const params = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        if (appLocation.state?.description?.length) {
            setProduct(appLocation.state);
        } else {
            services.getProductById(params.id as string).then(({ data }) => setProduct(data));
        }
    }, [appLocation.state, params.id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.productDetailContainer}>
            <div className={styles.productDetailHeader}>
                <div className={styles.productImageContainer}>
                    <img src={product.thumbnail} alt={product.title} className={styles.productImage}/>
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.productTitleSection}>
                        <div className={styles.productTitle}>{product.title}</div>
                        <div className={styles.productPriceSection}>
                            <div className={styles.productPrice}>${product.price.toFixed(2)}</div>
                            {product.discountPercentage > 0 && (
                                <div className={styles.discountPercentage}>
                                    -{product.discountPercentage}%
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.productDescription}>{product.description}</div>
                    <div className={styles.productTags}>
                        {product.tags.map((tag, index) => (
                            <TagsComponent key={index} tag={tag}/>
                        ))}
                    </div>
                    <div className={styles.productRating}>
                        ⭐ {product.rating.toFixed(1)}
                    </div>
                </div>
            </div>

            <div className={styles.productStatistics}>
                <div className={styles.statisticItem}>Minimum Order Quantity: {product.minimumOrderQuantity}</div>
            </div>

            <div className={styles.productMeta}>
                <div className={styles.metaItem}>Stock: {product.stock}</div>
                <div className={styles.metaItem}>Brand: {product.brand}</div>
                <div className={styles.metaItem}>SKU: {product.sku}</div>
                <div className={styles.metaItem}>Availability: {product.availabilityStatus}</div>
            </div>

            <div className={styles.productAdditionalInfo}>
                <div className={styles.additionalInfoItem}>
                    <strong>Warranty Information:</strong> {product.warrantyInformation}
                </div>
                <div className={styles.additionalInfoItem}>
                    <strong>Shipping Information:</strong> {product.shippingInformation}
                </div>
                <div className={styles.additionalInfoItem}>
                    <strong>Return Policy:</strong> {product.returnPolicy}
                </div>
            </div>

            {product.images.length > 1 && (
                <div className={styles.productImagesGallery}>
                    {product.images.map((image, index) => (
                        <img key={index} src={image} alt={`Product image ${index}`} className={styles.productGalleryImage}/>
                    ))}
                </div>
            )}

            <div className={styles.productStatistics}>
                <div className={styles.statisticItem}>Created At: {new Date(product.meta.createdAt).toLocaleDateString()}</div>
                <div className={styles.statisticItem}>Updated At: {new Date(product.meta.updatedAt).toLocaleDateString()}</div>
            </div>

            <div className={styles.productReviews}>
                <h3>Reviews</h3>
                {product.reviews.map((review, index) => (
                    <ReviewComponent key={index} review={review}/>
                ))}
            </div>
        </div>
    );
};

export default ProductDetailComponent;

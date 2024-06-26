import React, { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { connect } from 'react-redux';

import ALink from '~/components/features/custom-link';
import { cartActions } from '~/store/cart';
import { modalActions } from '~/store/modal';
import { wishlistActions } from '~/store/wishlist';
import { toDecimal } from '~/utils';

import { Product } from '~/utils/types';

type ProductThreeProps = {
  product: Product;
  adClass?: string;
  toggleWishlist?: (product: any) => void;
  wishlist: any;
  addToCart: (product: any) => void;
  openQuickview: (productSlug: string) => void;
  isCategory?: boolean;
  isNew?: boolean;
  showStars?: boolean;
};

const ProductThree: FC<ProductThreeProps> = (props) => {
  const {
    product,
    adClass,
    toggleWishlist,
    wishlist,
    addToCart,
    openQuickview,
    isNew = false,
    isCategory = true,
    showStars = false,
  } = props;

  // decide if the product is wishlisted
  let isWishlisted: boolean;
  isWishlisted =
    wishlist.findIndex((item) => item.slug === product.slug) > -1
      ? true
      : false;

  // Generate random number from 4.3 to 5
  const rating = Math.random() * (5 - 4.3) + 4.3;

  const showQuickviewHandler = () => {
    openQuickview(product.slug);
  };

  const wishlistHandler = (e) => {
    if (toggleWishlist) {
      toggleWishlist(product);
    }

    e.preventDefault();
    let currentTarget = e.currentTarget;
    currentTarget.classList.add('load-more-overlay', 'loading');

    setTimeout(() => {
      currentTarget.classList.remove('load-more-overlay', 'loading');
    }, 1000);
  };

  const addToCartHandler = (e) => {
    e.preventDefault();
    console.info('ProductThree addToCartHandler');
    // addToCart({ ...product, qty: 1, price: product.price[0] });
  };

  return (
    <div
      className={`product product-classic ${adClass} ${
        product.variants?.length > 0 ? 'product-variable' : ''
      }`}
    >
      <figure className="product-media">
        <ALink href={`/product/default/${product.slug}`}>
          <LazyLoadImage
            alt="product"
            src={product.mainImage}
            threshold={500}
            effect="opacity"
            width="300"
            height="300"
          />

          {/* {product.pictures.length >= 2 ? (
            <LazyLoadImage
              alt="product"
              src={process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[1].url}
              threshold={500}
              width="300"
              height="338"
              effect="opacity"
              wrapperClassName="product-image-hover"
            />
          ) : (
            ''
          )} */}
        </ALink>

        <div className="product-label-group">
          {isNew && <label className="product-label label-new">Nuevo</label>}
          {/* {product.is_top ? (
            <label className="product-label label-top">Top</label>
          ) : (
            ''
          )} */}
          {/* {product.discount > 0 ? (
            product.variants.length === 0 ? (
              <label className="product-label label-sale">
                {product.discount}% OFF
              </label>
            ) : (
              <label className="product-label label-sale">Sale</label>
            )
          ) : (
            ''
          )} */}
        </div>
      </figure>

      <div className="product-details">
        {/* {isCategory ? (
          <div className="product-cat">
            {product.categories
              ? product.categories.map((item, index) => (
                  <React.Fragment key={item.name + '-' + index}>
                    <ALink
                      href={{
                        pathname: '/shop',
                        query: { category: item.slug },
                      }}
                    >
                      {item.name}
                      {index < product.categories.length - 1 ? ', ' : ''}
                    </ALink>
                  </React.Fragment>
                ))
              : ''}
          </div>
        ) : (
          ''
        )} */}

        <h3 className="product-name">
          <ALink href={`/product/default/${product.slug}`}>
            {product.name}
          </ALink>
        </h3>

        <div className="product-price">
          {/* {product.price[0] !== product.price[1] ? (
            product.variants.length === 0 ||
            (product.variants.length > 0 && !product.variants[0].price) ? (
              <>
                <ins className="new-price">${toDecimal(product.price[0])}</ins>
                <del className="old-price">${toDecimal(product.price[1])}</del>
              </>
            ) : (
              <del className="new-price">
                ${toDecimal(product.price[0])} – ${toDecimal(product.price[1])}
              </del>
            )
          ) : (
            <ins className="new-price">${toDecimal(product.price[0])}</ins>
          )} */}
          <>
            <ins className="new-price">${toDecimal(product.finalPrice)}</ins>
            <del className="old-price">${toDecimal(product.finalPrice)}</del>
          </>
        </div>

        {showStars && (
          <div className="ratings-container">
            <div className="ratings-full">
              <span
                className="ratings"
                style={{ width: 20 * rating + '%' }}
              ></span>
              <span className="tooltiptext tooltip-top">
                {toDecimal(rating)}
              </span>
            </div>

            <ALink
              href={`/product/default/${product.slug}`}
              className="rating-reviews"
            >
              ( {rating} reviews )
            </ALink>
          </div>
        )}

        <div className="product-action">
          {product.variants?.length > 0 ? (
            <ALink
              href={`/product/default/${product.slug}`}
              className="btn-product btn-cart"
              title="Go to product"
            >
              <span>Select Options</span>
            </ALink>
          ) : (
            <a
              href="#"
              className="btn-product btn-cart"
              title="Añadir al carrito"
              onClick={addToCartHandler}
            >
              <i className="d-icon-bag"></i>
              <span>Añadir</span>
            </a>
          )}
          <a
            href="#"
            className="btn-product-icon btn-wishlist"
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            onClick={wishlistHandler}
          >
            <i
              className={isWishlisted ? 'd-icon-heart-full' : 'd-icon-heart'}
            ></i>
          </a>
          <ALink
            href="#"
            className="btn-product-icon btn-quickview"
            title="Quick View"
            onClick={showQuickviewHandler}
          >
            <i className="d-icon-search"></i>
          </ALink>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : [],
  };
}

export default connect(mapStateToProps, {
  toggleWishlist: wishlistActions.toggleWishlist,
  addToCart: cartActions.addToCart,
  ...modalActions,
})(ProductThree);

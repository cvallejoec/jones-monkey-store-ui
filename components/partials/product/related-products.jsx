import OwlCarousel from '~/components/features/owl-carousel';

import ProductThree from '~/components/features/product/product-three';

import { mainSlider21 } from '~/utils/data/carousel';

export default function RelatedProducts( props ) {
    const { products, adClass = "pt-3 mt-10" } = props;

    return (
        products.length > 0 ?
            <section className={ `${ adClass }` }>
                <h2 className="title justify-content-center text-normal font-weight-bold">Related Products</h2>

                <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ mainSlider21 }>
                    {
                        products && products.slice( 0, 7 ).map( ( item, index ) =>
                            <div className="product-wrap" key={ 'related-product-' + index }>
                                <ProductThree product={ item } adClass='' isCategory={ false } />
                            </div>
                        )
                    }
                </OwlCarousel>
            </section> : ''
    )
}
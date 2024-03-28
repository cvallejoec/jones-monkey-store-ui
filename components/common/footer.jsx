import ALink from '~/components/features/custom-link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-xl-5col2">
                            <div className="widget widget-about">
                                <ALink href="/" className="logo-footer">
                                    <img src="./images/home/logo-footer.png" alt="logo-footer" className="mb-6"
                                        width="150" height="43" />
                                </ALink>
                                <ul className="widget-body row">
                                    <li className="col-sm-6">
                                        <label>Address</label>
                                        <ALink href="#">123 Street Name, City, England</ALink>
                                    </li>
                                    <li className="col-sm-6">
                                        <label>Email</label>
                                        <ALink href="mailto:mail@example.com">mail@Riode.com</ALink>
                                    </li>
                                    <li className="col-sm-6">
                                        <label>Phone</label>
                                        <ALink href="#">Toll Free (123) 456-7890</ALink>
                                    </li>
                                    <li className="col-sm-6">
                                        <label>WORKING DAYS/HOURS</label>
                                        <ALink href="#">Mon - Sun / 9:00 AM - 8:00 PM</ALink>
                                    </li>
                                </ul>

                                <div className="social-links mt-sm-0 mt-3">
                                    <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                    <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                    <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                    <ALink href="#" className="social-link social-pinterest fab fa-pinterest-p"></ALink>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5col col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">About Us</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="/pages/about-us">About Us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Order History</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Returns</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Custom Service</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Terms &amp; Condition</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-5col col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="/pages/login">Sign in</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/cart">View Cart</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/wishlist">My Wishlist</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Track My Order</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Help</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-5col">
                            <div className="widget mb-0 mb-xl-6">
                                <h4 className="widget-title mb-4">Popular Posts</h4>
                                <div className="widget-body">
                                    <div className="post post-list-xs">
                                        <div className="post-calendar">
                                            <span className="post-day">06</span>
                                            <span className="post-month">SEP</span>
                                        </div>
                                        <div className="post-details">
                                            <h4 className="post-title"><ALink href="/blog/single/sit-amet-nisl-suscipit-adipiscin-susp-potenti-faucibus-arnare-suspendisse">Sit amet nisl suscipit
                                                    adipiscin Susp potenti faucibus arnare suspendisse.</ALink>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="post post-list-xs">
                                        <div className="post-calendar">
                                            <span className="post-day">06</span>
                                            <span className="post-month">SEP</span>
                                        </div>
                                        <div className="post-details">
                                            <h4 className="post-title"><ALink href="/blog/single/sit-amet-nisl-suscipit-adipiscin-susp-potenti-faucibus-arnare-suspendisse-two">Sit amet nisl suscipit
                                                    adipiscin Susp potenti faucibus arnare suspendisse.</ALink></h4>
                                        </div>
                                    </div>
                                </div>
                                <figure className="payment">
                                    <img src="./images/home/payment.png" alt="payment" width="181" height="24" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-block text-center">
                    <p className="copyright ls-normal font-weight-normal">Riode eCommerce &copy; 2021. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
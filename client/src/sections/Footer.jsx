import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-black mt-16 sticky top-[100%] right-0 left-0">
      <div className="flex w-[1170px] items-start justify-between flex-wrap pt-16 pb-16 mx-auto text-white">
        <div className="flex flex-col gap-y-4">
          <h1 className="logo-text text-white">Exclusive</h1>
          <h3 className="footer-list-head">Subscribe</h3>
          <p className="">Get 10% off your first order</p>
          <div className="w-[217px] flex justify-center items-center border-[1.5px] bg-inherit rounded border-[#FAFAFA] border-solid">
            <input
              type="text"
              placeholder="Enter your email"
              className=" bg-inherit py-3 pl-4 w-[130px] focus-visible:outline-0 focus-visible:font-poppins font-poppins focus-visible:leading-[24px] focus-visible:text-[16px] text-[16px] leading-[24px]"
            />
            <button className="pr-3 ml-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.91196 11.9998H3.99996L2.02296 4.1348C2.0103 4.0891 2.00259 4.04216 1.99996 3.9948C1.97796 3.2738 2.77196 2.7738 3.45996 3.1038L22 11.9998L3.45996 20.8958C2.77996 21.2228 1.99596 20.7368 1.99996 20.0288C2.00198 19.9655 2.0131 19.9029 2.03296 19.8428L3.49996 14.9998"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <h3 className="footer-list-head">Support</h3>
          <ul className="text-white">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-list-head">Account</h3>
          <ul className="footer-list">
            <li>
              <a className="footer-list-text" href="">
                My Account
              </a>
            </li>
            <li>
              <a className="footer-list-text" href="">
                Login / Register
              </a>
            </li>
            <li>
              <a className="footer-list-text" href="">
                Cart
              </a>
            </li>
            <li>
              <a className="footer-list-text" href="">
                Wishlist
              </a>
            </li>
            <li>
              <a className="footer-list-text" href="">
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-list-head">Quick Link</h3>
          <ul className="footer-list">
            <li>
              <a className="footer-list-text" href="">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="footer-list-text" href="">
                Terms Of Use
              </a>
            </li>
            <li>
              <a className="footer-list-text" href="">
                FAQ
              </a>
            </li>
            <li>
              <a className="footer-list-text" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-list-head">Quick Link</h3>
          <ul className="footer-list">
            <li>
              <a className="footer-list-text" href="">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="footer-list-text" href="">
                Terms Of Use
              </a>
            </li>
            <li>
              <a className="footer-list-text" href="">
                FAQ
              </a>
            </li>
            <li>
              <a className="footer-list-text" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

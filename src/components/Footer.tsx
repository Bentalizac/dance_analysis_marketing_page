import { PRODUCT_NAME } from "../config";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">{PRODUCT_NAME}</span>
        <span className="footer-copy">
          &copy; {new Date().getFullYear()} {PRODUCT_NAME}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

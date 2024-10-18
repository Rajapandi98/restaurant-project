import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section>
      <footer>
        <div className={classes['footer-container']}>
          <div className={classes["footer-about"]}>
            <h3>About Us</h3>
            <p>
              We are a gourmet restaurant dedicated to providing high-quality,
              freshly prepared meals crafted by expert chefs. Join us for a
              delicious experience!
            </p>
          </div>

          <div className={classes["footer-contact"]}>
            <h3>Contact Us</h3>
            <p>Email: info@restaurant.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Gourmet St, Food City, FC 56789</p>
          </div>

          <div className={classes["footer-hours"]}>
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
          </div>

          {/* <div className={classes["footer-social"]}>
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com/login/">Facebook</a> | <a href="#">Instagram</a> |{" "}
            <a href="#">Twitter</a>
          </div> */}
        </div>

        <div className={classes["footer-bottom"]}>
          <p>&copy; 2024 Restaurant. All Rights Reserved.</p>
        </div>
      </footer>
    </section>
  );
};
export default Footer;

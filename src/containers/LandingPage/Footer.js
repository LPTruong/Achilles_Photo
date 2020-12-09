const { default: ImagesGrid } = require("./home/ImagesGrid");

const Footer = () => {
  return (
    <div className="footer">
      <div className="width-1200">
        <div className="row-1">
          <div className="column-1">
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              tempore atque, iste doloribus nulla aut?
            </p>
            <div className="icons">
              <i class="fab fa-google-plus-g"></i>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
            </div>
          </div>
          <div className="column-2">
            <p className="">CoinBase Links</p>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Sell</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="column-3">
            <p className="">Contact Us</p>
            <ul>
              <li>(+123) 456789</li>
              <li>Coinbase@yahoo.com</li>
              <li>Address goes here</li>
            </ul>
          </div>
          <div className="column-4">
            <ImagesGrid column={4} />
          </div>
        </div>
        <div className="row-2">
          <p className="">&copy; 2020 ABCDXYZ</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

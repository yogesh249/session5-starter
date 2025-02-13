import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <div>
<header className="position-absolute w-100">
  <div className="container">
    <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
      <div className="contact">
        <a href="tel:+1234567890" className="tel"><i className="fa fa-phone" aria-hidden="true" />+1234567890</a>
        <a href="/cdn-cgi/l/email-protection#50393e363f10293f25223d31393c7e333f3d"><i className="fa fa-envelope" aria-hidden="true" /><span className="__cf_email__" data-cfemail="2b42454d446b52445e59464a424705484446">[email&nbsp;protected]</span></a>
      </div>
      <nav className="d-flex aic">
        <a href="#" className="login"><i className="fa fa-user" aria-hidden="true" />Login</a>
        <ul className="nav social d-none d-md-flex">
          <li><a href="https://www.facebook.com/fh5co" target="_blank"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-google-plus" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
        </ul>
      </nav>
    </div>
    <nav className="navbar navbar-expand-md navbar-light">
      <a className="navbar-brand" href="index.html"><img src={logo} className='nav-logo' alt='Multipurpose' /></a>
      <div className="group d-flex align-items-center">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <a className="login-icon d-sm-none" href="#"><i className="fa fa-user" /></a>
        <a className="cart" href="#"><i className="fa fa-shopping-cart" /></a>
      </div>
      <a className="search-icon d-none d-md-block" href="#"><i className="fa fa-search" /></a>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
        </ul>
        <form className="bg-white search-form" method="get" id="searchform">
          <div className="input-group">
            <input className="field form-control" id="s" name="s" type="text" placeholder="Search" />
            <span className="input-group-btn">
              <input className="submit btn btn-primary" id="searchsubmit" name="submit" type="submit" defaultValue="Search" />
            </span>
          </div>
        </form>
      </div>
    </nav>
  </div>
</header>
    </div>
  );
};

export default Navbar;

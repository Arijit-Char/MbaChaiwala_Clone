import React from "react";
import "../styles/footer.scss";
function Footer() {
  const footerLink = (ele) => {
    const allLinks = document.querySelectorAll(".footerLinks");
    switch (ele) {
      case 0:
        allLinks.forEach((item, index) =>
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 1:
        allLinks.forEach((item, index) =>
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 2:
        allLinks.forEach((item, index) =>
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 3:
        allLinks.forEach((item, index) =>
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 4:
        allLinks.forEach((item, index) =>
          index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 5:
        allLinks.forEach((item, index) =>
          index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 6:
        allLinks.forEach((item, index) =>
          index === 6 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;

      default:
        allLinks.forEach((item, index) => (item.style.opacity = 1));
        break;
    }
  };
  const linksBackToNormal = () => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
  };
  return (
    <>
      <footer>
        <h1>
          Let's
          <br />
          #ConnectOnCutting?
        </h1>

        <aside onMouseLeave={linksBackToNormal}>
          <a href="/" className="footerLinks" onMouseOver={() => footerLink(0)}  data-cursorpointermini={true}>
            Home
          </a>
          <a
            href="/story"
            className="footerLinks"
            onMouseOver={() => footerLink(1)}
            data-cursorpointermini={true}
          >
            Story
          </a>
          <a
            href="/media"
            className="footerLinks"
            onMouseOver={() => footerLink(2)}
            data-cursorpointermini={true}
          >
            Media
          </a>
          <a
            href="/franchise"
            className="footerLinks"
            onMouseOver={() => footerLink(4)}
            data-cursorpointermini={true}
          >
            Franchise
          </a>
          <a
            href="/events"
            className="footerLinks"
            onMouseOver={() => footerLink(5)}
            data-cursorpointermini={true}
          >
            Events
          </a>
          <a
            href="/chaiwalacares"
            className="footerLinks"
            onMouseOver={() => footerLink(6)}
            data-cursorpointermini={true}
          >
            Chai Wala Cares
          </a>
        </aside>

        <div>
          <h5>Email</h5>
          <a href="mailto: info@mbachaiwala.com">Info@mbachaiwala.com</a>
          <a href="mailto: franchise@mbachaiwala.com">
            Franchise@mbachaiwala.com
          </a>
        </div>

        <div>
          <h5>Phone</h5>
          <a href="tel: +91722905222">+91722905222</a>
        </div>

        <p>© COPYRIGHT 2024 MBA CHAIWALA. MADE BY Arijit Char</p>
      </footer>
      <div className="footer"></div>
    </>
  );
}

export default Footer;

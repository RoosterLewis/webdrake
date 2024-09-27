import { PropTypes } from "prop-types";
import "./landing.css";

const DynamicImage = ({ url, alt }) => (
  <img src={url} alt={alt || "dynamicImages"} />
);

DynamicImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export const Landing = ({ loginState, handleToggle }) => {
  return (
    <section className="landing-main">
      <section>
        <div>
          <DynamicImage url={loginState} alt={loginState} />
        </div>
        <nav className="landing-nav">
          <button
            href={window.location.href + "tech"}
            onClick={() => handleToggle("tech")}
          >
            Tech
          </button>
          <button
            href={window.location.href + "art"}
            onClick={() => handleToggle("art")}
          >
            Art
          </button>
        </nav>
        <p>@Leevi Kukkonen 2023</p>
      </section>
    </section>
  );
};

Landing.propTypes = {
  loginState: PropTypes.string.isRequired,
  handleToggle: PropTypes.function,
};

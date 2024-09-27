import { ImageSection } from "./ImageSection";
import louhiImg from "./imgs/louhiart1.png";
export const Art = () => {
  return (
    <section>
      <nav>
        <a href={window.location.href.split("/art")[0]}>Return</a>
      </nav>
      <h1>Art of Leevi Kukkonen</h1>
      <p>Vapaa-aikainen sarjakuvataiteilija ja graafinen suunnitelija</p>
      <h2>Portfolio</h2>
      <h3>Digital</h3>
      <p>Digitally produced art categorized by software</p>
      <ImageSection src={louhiImg} alt="image from Saimaannorppamies issue 2" />
    </section>
  );
};

import CarouselImage from "./(components)/(Carousel)/CarouselImage";
import Divider from "./(components)/Divider";
import Education from "./(components)/Education";
import FavouriteJems from "./(components)/(favouriteJems)/FavouriteJems";
import Footer from "./(components)/Footer";
import Introduction from "./(components)/Introduction";
import NameAndImage from "./(components)/NameAndImage";
import Projects from "./(components)/Projects";
import Skills from "./(components)/Skills";
import SocialMedia from "./(components)/SocialMedia";

export default function Home() {
  return (
    <main id="home">
      <div className="p-5 flex flex-col items-center pt-24">
        <div className="lg:w-[860px] md:w-[780px] w-full md:px-[60px] h-screen">
          <NameAndImage />
          <Introduction />
          <Divider />
          <SocialMedia />
          <Skills />
          <Projects />
          <Education />
          <CarouselImage />
          <FavouriteJems />
          <Divider />
          <Footer />
          <div className="pt-16"></div>
        </div>
      </div>
    </main>
  );
}

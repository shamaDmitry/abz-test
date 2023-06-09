import Button from '../Shared/Button';

const bgClasses = "bg-no-repeat bg-[center_bottom_10%] bg-cover bg-home-banner";
const overlayClasses = "after:bg-gradient-to-b after:from-black/50 after:to-black/50 after:w-full after:h-full after:absolute after:pointer-events-none";

const HomeBanner = () => {
  return (
    <section className={`py-[40px] min-h-[500px] md:min-h-[650px] relative flex items-center ${overlayClasses} ${bgClasses}`}>
      <div className="max-w-[412px] mx-auto px-4 text-white z-20 text-center">
        <h1 className="text-title1 mb-[21px]">
          Test assignment for front-end developer
        </h1>

        <p className="text-base">
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>

        <div className="text-center mt-8">
          <Button
            color="yellow"
          >
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;

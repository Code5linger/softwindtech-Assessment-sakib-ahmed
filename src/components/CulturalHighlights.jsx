// Cards
import RocketCard from './Cards/RocketCard';
import GlobalCard from './Cards/GlobalCard';
import UpskillingCard from './Cards/UpskillingCard';
import CollaborationCard from './Cards/CollaborationCard';

const CulturalHighlights = () => {
  return (
    <section className='grid place-content-center bg-[url("assets/CulturalHighlightsBG.png")] bg-cover bg-center h-204.5'>
      <div className="max-w-7xl mx-auto px-14 py-7.5 bg-white/87">
        <h1 className="font-semibold text-[30px] tracking-[0.05em] font-poppins">
          Cultural Highlights
        </h1>
        <p className="font-poppins font-normal text-[14px] leading-[24px] text-gray-700 max-w-[872px] mt-[43px]">
          At Smart Lab Global, our values shape everything we do. We lead with
          integrity, innovate with purpose, and collaborate with empathy. These
          principles guide our culture, drive our work, and empower us to
          deliver lasting impact for our clients and communities.
        </p>
        {/* Mini Cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full mt-[56px]">
          {/* Card */}
          <CollaborationCard />
          <RocketCard />
          <GlobalCard />
          <UpskillingCard />
        </div>
      </div>
    </section>
  );
};

export default CulturalHighlights;

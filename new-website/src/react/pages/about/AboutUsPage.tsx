import { useNavigate } from 'react-router-dom';
import { DefaultPage } from '~/pages/default/DefaultPage';
import Samaya from '~/assets/images/teamMembers/Samaya.png';
import Samaya2x from '~/assets/images/teamMembers/Samaya-2x.png';
import Sergey from '~/assets/images/teamMembers/Sergey.png';
import Sergey2x from '~/assets/images/teamMembers/Sergey-2x.png';
import Maria from '~/assets/images/teamMembers/Maria.png';
import Maria2x from '~/assets/images/teamMembers/Maria-2x.png';
import Alex from '~/assets/images/teamMembers/Alex.png';
import Alex2x from '~/assets/images/teamMembers/Alex-2x.png';
import Paul from '~/assets/images/teamMembers/Paul.png';
import Paul2x from '~/assets/images/teamMembers/Paul-2x.png';
import swiftInvention from '~/assets/images/swift-white-logo-large.svg';
import emailIcon from '~/assets/images/email.svg';
import linkedInIcon from '~/assets/images/linkedIn.svg';
import bg1 from '~/assets/images/1-bg.png';
import bg2 from '~/assets/images/2-bg.png';
import bg3 from '~/assets/images/3-bg.png';

const teamMembers = [
  {
    name: 'Samaya Habibova',
    position: 'CEO',
    description:
      'Head of business development. Legal-tech entrepreneur, CEO of E-Legal. Lawyer and Ph.D candidate. Cupertino, California.',
    photo: Samaya.src,
    photo2x: Samaya2x.src,
    email: 'shabibova@swiftinvention.com',
    linkedIn: 'https://www.linkedin.com/in/samayahabibova/',
  },
  {
    name: 'Sergey Kucherenko',
    position: 'CTO',
    description:
      'Head of engineering. Solution architect, technical lead for enterprise & consumer applications. Portugal.',
    photo: Sergey.src,
    photo2x: Sergey2x.src,
    email: 'skucherenko@swiftinvention.com',
    linkedIn: 'https://www.linkedin.com/in/sergey-kucherenko-514a37100/',
  },
  {
    name: 'Maria Vasyutenko',
    position: 'Client Partner',
    description:
      'Head of client engagement. Project manager, product manager, and business analyst. Romania.',
    photo: Maria.src,
    photo2x: Maria2x.src,
    email: 'mvasuytenko@swiftinvention.com',
    linkedIn: '',
  },
  {
    name: 'Alex Yuhimenko',
    position: 'Chief Architect',
    description:
      'Software Architect with 20 years in scalable systems, cloud architecture, identity, and privacy. Portugal.',
    photo: Alex.src,
    photo2x: Alex2x.src,
    email: 'ayuhimenko@swiftinvention.com',
    linkedIn: 'https://www.linkedin.com/in/alexander-yuhimenko-75b41846/',
  },
  {
    name: 'Paul Trevithick',
    position: 'Founder',
    description:
      'Founder of Swift Invention. Serial tech entrepreneur, privacy advocate. MIT-trained engineer. Boston, Massachusetts.',
    photo: Paul.src,
    photo2x: Paul2x.src,
    email: 'ptrevithick@swiftinvention.com',
    linkedIn: 'https://www.linkedin.com/in/paultrevithick/',
  },
];

const workProcessMap = [
  {
    title: 'We deliver. Swiftly!',
    description:
      'All software and design is directly and exclusively developed by our 30 person team in Eastern Europe. We know how to create production-ready solutions.',
    bgImage: bg1.src,
  },
  {
    title: 'We cooperate',
    description:
      'We are quick to respond, actively engage in requirement discussions, and provide regular updates, ensuring utmost transparency in our work.',
    bgImage: bg2.src,
  },
  {
    title: 'We meet your needs',
    description:
      'With a solid technical background, we effortlessly translate the intricate technology of your project into visually captivating and easily understandable graphics.',
    bgImage: bg3.src,
  },
];

export const AboutUsPage = () => {
  const navigate = useNavigate();

  const handleWorkWithUs = () => {
    navigate('/feedback');
  };

  return (
    <DefaultPage>
      <div className="px-10 md:px-14 py-16 lg:py-32 bg-secondaryCol5 text-secondaryCol1 font-inter bg-pageBg bg-cover bg-no-repeat bg-center">
        <h1 className="text-5xl font-bold">
          <span>Meet</span>
          <br />
          <img
            className="inline my-5 pr-10"
            src={swiftInvention.src}
            alt="Swift Invention Logo"
          />
        </h1>
        <p className="text-xl text-secondaryCol1/85 max-w-15xl">
          Swift was founded in 2012 to help clients transform bold visions into
          breakthrough software products. Our clients collaborate with our
          cost-effective offshore team of designers, analysts, data scientists,
          and software developers. Together we'll ensure that every project is
          executed swiftly with precision and excellence.
        </p>
        <hr className="border-secondaryCol1 opacity-10 border-1 my-16 md:my-28 lg:my-32" />
        <div>
          <h2 className="font-bold text-4xl">Leadership Team</h2>
          <p className="pt-5 pb-16 text-xl text-secondaryCol1/85 max-w-15xl">
            We know how to take ideas from concept to reality. Be sure your
            projects will be completed with a dedicated team, the highest
            quality, and on-time.
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col rounded-xl bg-gradient-to-b from-transparent to-primaryCol3WithOpacity"
              >
                <div className="">
                  <img
                    className="w-60 h-60 object-cover mb-5 lg:mb-0"
                    src={member.photo}
                    srcSet={`${member.photo} 1x, ${member.photo2x} 2x`}
                    alt={member.name}
                  />
                </div>
                <div className="m-8">
                  <div className="text-xl font-bold">{member.name}</div>
                  <div className="mb-4 text-xl font-medium">
                    {member.position}
                  </div>
                  <hr className="border-secondaryCol1 opacity-10 border-1 mb-4" />
                  <div className="mt-4 min-h-28 text-lg text-secondaryCol1/85">
                    {member.description}
                  </div>
                  <div className="mt-4 flex text-lg font-inter">
                    <a href={member.linkedIn} className="mr-4">
                      <img src={linkedInIcon.src} alt={member.name} />
                    </a>
                    <a href={`mailto:${member.email}`}>
                      <img src={emailIcon.src} alt={member.email} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="my-16 md:my-28 lg:my-32">
            <h2 className="font-bold text-4xl mb-5">
              Extensive expertise and work process
            </h2>
            <p className="pb-16 text-xl text-secondaryCol1/85">
              We follow a proven product innovation process. We are guided by
              decades of experience developing products. We assemble
              world-class, yet highly affordable, offshore design & engineering
              teams. We scale as you do and operate and optimize your platforms
              whether they run at the edge or in the cloud.
            </p>
            <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {workProcessMap.map(({ title, description, bgImage }) => (
                <div
                  key={title}
                  style={{ backgroundImage: `url(${bgImage})` }}
                  className={`pt-34 bg-no-repeat bg-left-top-2`}
                >
                  <h3 className="font-bold text-2xl">{title}</h3>
                  <p className="text-lg text-secondaryCol1/85">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <hr className="border-secondaryCol1 opacity-10 border-1 my-16" />
          <div>
            <button
              type="button"
              onClick={handleWorkWithUs}
              className="bg-primaryCol2 text-secondaryCol5 uppercase text-xl font-bold py-4 px-10 rounded-md"
            >
              Work with Us
            </button>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};

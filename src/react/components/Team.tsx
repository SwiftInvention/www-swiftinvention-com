import linkedInIcon from '~/assets/images/linkedIn.svg';
import Alex2x from '~/assets/images/teamMembers/Alex-2x.png';
import Alex from '~/assets/images/teamMembers/Alex.png';
import Maria2x from '~/assets/images/teamMembers/Maria-2x.png';
import Maria from '~/assets/images/teamMembers/Maria.png';
import Paul2x from '~/assets/images/teamMembers/Paul-2x.png';
import Paul from '~/assets/images/teamMembers/Paul.png';
import Samaya2x from '~/assets/images/teamMembers/Samaya-2x.png';
import Samaya from '~/assets/images/teamMembers/Samaya.png';
import Sergey2x from '~/assets/images/teamMembers/Sergey-2x.png';
import Sergey from '~/assets/images/teamMembers/Sergey.png';

const teamMembers = [
  {
    name: 'Samaya Habibova',
    position: 'CEO',
    description:
      'Head of business development. Legal-tech entrepreneur, CEO of E-Legal. Lawyer and Ph.D candidate.',
    place: 'Cupertino, California.',
    photo: Samaya.src,
    photo2x: Samaya2x.src,
    linkedIn: 'https://www.linkedin.com/in/samayahabibova/',
  },
  {
    name: 'Sergey Kucherenko',
    position: 'CTO',
    description:
      'Head of engineering. Solution architect, technical lead for enterprise & consumer applications.',
    place: 'Portugal.',
    photo: Sergey.src,
    photo2x: Sergey2x.src,
    linkedIn: 'https://www.linkedin.com/in/sergey-kucherenko-514a37100/',
  },
  {
    name: 'Maria Vasyutenko',
    position: 'Client Partner',
    description:
      'Head of client engagement. Project manager, product manager, and business analyst.',
    place: 'Romania.',
    photo: Maria.src,
    photo2x: Maria2x.src,
    linkedIn: '',
  },
  {
    name: 'Alex Yukhymenko',
    position: 'Chief Architect',
    description:
      'Software Architect with 20 years in scalable systems, cloud architecture, identity, and privacy.',
    place: 'Portugal.',
    photo: Alex.src,
    photo2x: Alex2x.src,
    linkedIn: 'https://www.linkedin.com/in/alexander-yuhimenko-75b41846/',
  },
  {
    name: 'Paul Trevithick',
    position: 'Founder',
    description:
      'Founder of Swift Invention. Serial tech entrepreneur, privacy advocate. MIT-trained engineer.',
    place: 'Boston, Massachusetts.',
    photo: Paul.src,
    photo2x: Paul2x.src,
    linkedIn: 'https://www.linkedin.com/in/paultrevithick/',
  },
];

export const Team = () => {
  return (
    <div className="container bg-surface py-16 text-secondaryCol1 lg:py-32">
      <div>
        <h2 className="text-4xl font-bold">Leadership Team</h2>
        <p className="max-w-15xl pb-16 pt-5 text-xl text-secondaryCol1/85 md:text-xl-desktop">
          We know how to take ideas from concept to reality. Be sure your
          projects will be completed with a dedicated team, the highest quality,
          and on-time.
        </p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-transparent to-primaryCol3WithOpacity"
            >
              <div className="team-member-photo mb-5 h-60 w-60 rounded-[50%] lg:mb-0">
                <img
                  className="h-60 w-60 rounded-[50%] object-cover"
                  src={member.photo}
                  srcSet={`${member.photo} 1x, ${member.photo2x} 2x`}
                  alt={member.name}
                />
              </div>
              <div className="relative z-10 m-8">
                <div className="text-xl font-bold md:text-xl-desktop">
                  {member.name}
                </div>
                <div className="mb-4 text-xl font-medium opacity-80 md:text-xl-desktop">
                  {member.position}
                </div>
                <hr className="border-1 mb-4 border-secondaryCol1 opacity-10" />
                <div className="mt-4 min-h-28 text-lg text-secondaryCol1/85">
                  {member.description}
                  <div className="italic">{member.place}</div>
                </div>
                <div className="mt-4 flex font-inter text-lg">
                  <a href={member.linkedIn} className="mr-4" target="_blank">
                    <img src={linkedInIcon.src} alt={member.name} />
                  </a>
                </div>
              </div>
              <div className="team-member-glow absolute top-[40%] h-full w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

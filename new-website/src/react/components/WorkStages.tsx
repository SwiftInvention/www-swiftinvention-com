import bg1 from '~/assets/images/1-bg.png';
import bg2 from '~/assets/images/2-bg.png';
import bg3 from '~/assets/images/3-bg.png';
import bg4 from '~/assets/images/4-bg.png';
import bg5 from '~/assets/images/5-bg.png';

const workProcessMap = [
  {
    title: 'Advise',
    description:
      'We help with product management, product strategy and even funding. In the end it’s about finding the right product market fit.',
    bgImage: bg1.src,
  },
  {
    title: 'Design',
    description:
      'We encourage our customers to perform user experience research. After that we work with you on experience and UI design.',
    bgImage: bg2.src,
  },
  {
    title: 'Build',
    description:
      'We assemble world-class offshore engineering teams with experience with many of the latest technologies and cloud platforms.',
    bgImage: bg3.src,
  },
  {
    title: 'Run',
    description:
      'After creating the CI/CD automation many clients ask us to deploy and maintain their solutions on their behalf.',
    bgImage: bg4.src,
  },
  {
    title: 'Optimize',
    description:
      'We scale and optimize your solutions while ensuring security best practices to achieve the highest availability and highest performance.',
    bgImage: bg5.src,
  },
];

export const WorkStages = () => {
  return (
      <div className="px-10 md:px-14 py-16 lg:py-32 text-secondaryCol1 font-inter">
        <div>
          <div className="my-16 md:my-28 lg:my-32">
            <h2 className="font-bold text-4xl mb-5">
              We deliver software. Swiftly.
            </h2>
            <p className="pb-16 text-xl text-secondaryCol1/85">
              We follow a proven product innovation process, guided by decades of experience developing products. We assemble world-class, yet highly affordable, offshore design & engineering teams. We scale as you do and operate and optimize your platforms whether they run at the edge or in the cloud.
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
        </div>
      </div>
  );
};

export default WorkStages;
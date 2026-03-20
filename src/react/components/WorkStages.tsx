export const WorkStages = ({
  stages,
  title,
  description,
}: {
  stages: {
    name: string;
    body: string;
  }[];
  title: string;
  description: string;
}) => {
  return (
    <div className="text-secondaryCol1 container py-16 lg:py-32">
      <div>
        <div className="my-16 md:my-28 lg:my-32">
          <div className="max-w-[912px]">
            <h2 className="md:text-6xl-desktop mb-5 text-6xl">{title}</h2>
            <p className="md:text-lg-desktop text-lg text-white/80">
              {description}
            </p>
          </div>
          <div className="mb-4 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {stages.map(({ name, body }, idx) => (
              <div key={idx}>
                <div className="transparent-number relative -bottom-20 z-0 text-[180px] leading-[218px] font-bold">
                  {idx + 1}
                </div>
                <h3 className="md:text-3xl-desktop relative z-10 text-3xl">
                  {name}
                </h3>
                <p className="md:text-lg-desktop relative z-10 text-lg text-white/80">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStages;

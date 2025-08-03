import { ReactNode } from 'react';

type LayoutSectionProps = {
  children: ReactNode;
  childrenUpperContainer?: ReactNode;
  classNameSection?: string;
  classNameContainer?: string;
  id?: string;
};

const LayoutSection = ({
  children,
  childrenUpperContainer,
  classNameSection,
  classNameContainer,
  id,
}: LayoutSectionProps) => {
  return (
    <section
      className={`px-4 py-[60px] sm:px-6 md:py-[100px] md:px-10 relative ${classNameSection || ''}`}
      id={id}
    >
      {childrenUpperContainer}
      <div className={`container mx-auto ${classNameContainer || ''}`}>{children}</div>
    </section>
  );
};

export default LayoutSection;

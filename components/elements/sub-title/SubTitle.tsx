import cx from "clsx";

type SubTitle = {
  subTitle: string;
  className?: string;
};

export const SubTitle = ({ subTitle, className }: SubTitle) => {
  return (
    <div className="flex text-7xl text-emerald-950 w-full items-center gap-2 border-b border-neutral-900 mb-12 sm:mb-14 pb-4">
      <span className={cx(className)}>{subTitle}</span>
    </div>
  );
};

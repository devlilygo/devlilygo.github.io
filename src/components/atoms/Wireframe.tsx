import classNames from 'classnames';

const styles = {
  container: classNames(
    'outline-25',
    'flex',
    'h-full',
    'w-full',
    'items-center',
    'justify-center',
    'border',
    'border-[#ccc]',
    'text-lg',
    'font-semibold',
    'text-gray-500',
    'outline',
    'outline-[#ccc]'
  ),
};

const Wireframe = ({ children }: { children: string }) => {
  return (
    <div
      className={styles.container}
      style={{
        background: `linear-gradient(
      to top right,
      transparent calc(50% - 1px),
      #ccc calc(50% - 1px),
      #ccc calc(50% + 1px),
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      to bottom right,
      transparent calc(50% - 1px),
      #ccc calc(50% - 1px),
      #ccc calc(50% + 1px),
      transparent calc(50% + 1px)
    )`,
      }}
    >
      {children}
    </div>
  );
};

export default Wireframe;

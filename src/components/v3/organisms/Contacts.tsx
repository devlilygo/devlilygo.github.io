import classNames from "classnames";

const style = {
  container: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-screen",
    "items-center",
    "justify-center",
    "bg-[#fffdf5]",
    "pb-12"
  ),
};

const Contacts = () => {
  return <div className={style.container}>contacts</div>;
};

export default Contacts;

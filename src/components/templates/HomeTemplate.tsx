import Introduction from "../organisms/Introduction";
import Career from "../organisms/Career";

const HomeTemplate = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-y-auto">
      <Introduction />
      <Career />
    </div>
  );
};

export default HomeTemplate;

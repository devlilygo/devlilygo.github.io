import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const ProjectLayout = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-auto ">
      <div className="flex flex-col h-full w-full overflow-auto ">
        {/*  NOTE - Header  */}
        <div>
          <Header />
        </div>
        {/* NOTE - Body */}
        <div className="flex flex-col h-full w-full p-10"></div>
      </div>
      {/* NOTE - Footer */}
      <div className="flex align-baseline">
        <Footer />
      </div>
    </div>
  );
};
export default ProjectLayout;

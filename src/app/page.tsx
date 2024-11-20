'use client';

import classNames from 'classnames';
import Image from 'next/image';

const style = {
  NameArea: classNames(
    'flex',
    'flex-col',
    'min-w-96',
    'w-full',
    'h-[60%]',
    'items-center',
    'justify-center',
    'text-[240px]',
    'font-[BeautiqueDisplayRegular]',
    'text-nowrap'
  ),
  InsightArea: classNames(
    'flex',
    'flex-col',
    'w-[800px]',
    'p-10'
    // "justify-center"
  ),
};

export default function HomePage() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-between">
      {/* NOTE - Body */}
      <div className="flex flex-col h-full w-full p-10">
        <div className="mainGraphic absolute top-[36%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-100]"></div>
        <div className={style.NameArea}>Lily G*</div>

        {/* NOTE - Body Bottom */}
        <div className="flex w-full h-[40%] justify-center">
          <div className={style.InsightArea}>
            <div className="text-4xl italic font-[LuloCleanW01One] mb-5 ml-3 items-center">
              Insight
            </div>
            <div className="flex w-full max-w-[400px] border-b-[1px] border-black p-3 items-center justify-between">
              <div>Services</div>
              <div className="text-right">
                React and TypeScript-based
                <br /> Frontend Development
              </div>
            </div>
            <div className="flex w-full max-w-[400px] border-b-[1px] border-black p-3 items-center justify-between">
              <div>Industry</div>
              <div className="text-right">
                Software Development
                <br />
                Enterprise Software Development <br />
                Data Solutions
                <br />
                ...And Beyond
              </div>
            </div>
            <div className="flex w-full max-w-[400px] p-3 items-center justify-between">
              <div>Year</div>
              <div>2016-Current</div>
            </div>
          </div>
          <div className="flex flex-col w-[800px] p-10 items-center">
            <div className="italic font-[LuloCleanW01One] text-nowrap text-lg">
              Building impactful solutions
              <br />
              through&nbsp;
              <span className="font-[LuloCleanOneBold]">collaboration</span>,
              <br />
              <span className="font-[LuloCleanOneBold]">
                clear communication
              </span>
              , <br />
              and a focus on&nbsp;
              <span className="font-[LuloCleanOneBold]">efficiency</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

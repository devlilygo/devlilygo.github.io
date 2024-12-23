// Example usage in TimelineSection
import ScrollAnimation from '@/components/atoms/ScrollAnimation';
import classNames from 'classnames';

const style = {
  textArea: classNames('flex', 'w-fit', 'h-10', 'text-xl'),
  bold: classNames('font-[BeautiqueDisplayMedium]', 'text-2xl'),
};

const TimelineSection = () => (
  <div className="flex flex-col h-[calc(100vh-4rem-6rem)] w-full font-[BeautiqueDisplayRegular] text-xl">
    <ScrollAnimation>
      <div className="flex flex-col h-[calc(100vh-4rem-6rem)] w-full items-center justify-center">
        <div className={style.textArea}>
          <b className={style.bold}>Proficient</b>&nbsp;in building modern web
          applications
        </div>
        <div className={style.textArea}>
          with&nbsp;
          <b className={style.bold}>
            React, Next.js, and TypeScript, utilizing Node.js
          </b>
          &nbsp;for backend interactions
        </div>

        <div className={style.textArea}>
          and&nbsp;<b className={style.bold}>RESTful/GraphQL APIs</b>&nbsp;for
          data integration
        </div>
      </div>
    </ScrollAnimation>
    <ScrollAnimation>
      <div className="flex flex-col h-[calc(100vh-4rem-6rem)] w-full items-center justify-center">
        {/* <div className="flex w-full h-[10%] items-center justify-center ">
          Professional Experience
        </div> */}
        <div className="flex flex-col w-[80%] h-full items-center justify-center">
          <span className="m-2">
            <b className={style.bold}>Senior Front End Developer</b> at BRIQUE
          </span>
          <span className="text-base italic bg-slate-200 m-2">
            JANUARY 2020 - APRIL 2024 | Pangyo Techno Valley, Republic of Korea
          </span>
          <span className="m-2">
            Software Engineer focusing on <br />
            semiconductor manufacturing optimization and predictive analytics
            <br />
            for SK Hynix and other major clients.
            <br />
            to visualize semiconductor process data, <br />
            enabling fault detection, <br />
            predictive analytics, <br />
            and process optimization.
          </span>
        </div>
      </div>
    </ScrollAnimation>

    <ScrollAnimation>
      <div className="flex flex-col h-[calc(100vh-4rem-6rem)] w-full items-center justify-center">
        {/* <div className="flex w-full h-[10%] items-center justify-center ">
          Professional Experience
        </div> */}
        <div className="flex flex-col w-[80%] h-full items-center justify-center">
          <span className="m-2">
            <b className={style.bold}>Junior Back & Front End Developer </b>
            &nbsp;at Daewon C&C Co.
          </span>
          <span className="text-base italic bg-slate-200 m-2">
            MARCH 2016 - DECEMBER 2019 | Pangyo Techno Valley, Republic of Korea
          </span>
          <span className="m-2">
            Software Developer / System Operator <br />
            for SK Telecom, the largest telecommunications company of South
            Korea,
            <br />
            managing billing systems and customer data operations <br />
            for over 20 million users <br />
            while supporting system upgrades.
          </span>
        </div>
      </div>
    </ScrollAnimation>
  </div>
);

export default TimelineSection;

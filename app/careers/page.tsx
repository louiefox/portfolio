import config from "@/app-config/careers.json";
import { title } from "@/components/primitives";

export default function Careers() {
    return (
        <section className="flex flex-col items-center justify-center gap-8 py-10 mt-16">
            <div className="inline-block max-w-xlg text-center justify-center">
                <h1 className={title({ size: "xlg", color: "foreground" })}>{config.heading}</h1>
            </div>
            <div className="w-3/4 lg:w-1/3 justify-center">
                {Object.values(config.careers).map((career, index) => {
                    return (<div key={index} className="mt-10">
                        <h1 className="text-white text-3xl font-bold">{career.company}</h1>
                        <h1 className="text-white font-bold">{career.title}</h1>
                        <h1 className="text-white"> {career.start + " - " + career.end}</h1>

                        <p className="text-white mt-5 mb-5">{career.description}</p>

                        {Object.values(career.responsibilities).map((responsibility, index) => {
                            return (<li key={index} className="text-white mt-2">{responsibility}</li>);
                        })}
                        <h1 className="text-white">{career.reference}</h1>
                    </div>
                    );
                })}
            </div>
        </section>
    );
}

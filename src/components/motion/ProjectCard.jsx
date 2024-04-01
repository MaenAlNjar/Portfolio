import React from "react";
import { projects } from "../../constants";
import Section from "../Section";
import { GradientLight } from "../design";
import ClipPath from "../ClipPath";
const ProjectCard = () => {
  return (
    <Section id="features">
      <div className="container relative z-50">
        <div className="flex flex-wrap gap-10 mb-10">
          {projects.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.description}</p>
                <div className="flex items-center mt-auto">
                  <a
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"
                    href={item.href}
                  >
                    GIT HUB
                  </a>
                  <a
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"
                    herf={item.deploy}
                  >
                    DEPLOY
                  </a>
                </div>
              </div>

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
                  {item.src && (
                    <img
                      src={item.imagUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectCard;

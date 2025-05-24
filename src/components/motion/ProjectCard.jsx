import React from "react";
import { projects } from "../../constants";
import Section from "../Section";
import ClipPath from "../ClipPath";

const ProjectCard = () => {
  return (
    <Section id="features">
      <div className="container relative">
        <div className="flex flex-wrap gap-10 justify-center">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group relative bg-n-8 rounded-xl overflow-hidden md:w-[24rem] min-h-[22rem]"
              style={{ clipPath: "url(#benefits)" }}
            >
              {/* خلفية الصورة عند الهوفر */}
              {item.imagUrl && (
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <img
                    src={item.imagUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* محتوى الكارد */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                <h5 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h5>
                <p className="text-sm text-gray-400 mb-6">{item.description}</p>
                <div className="mt-auto flex gap-4">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-white uppercase"
                  >
                    GitHub
                  </a>
                  <a
                    href={item.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-white uppercase"
                  >
                    Deploy
                  </a>
                </div>
              </div>

              {/* Clip Path SVG */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectCard;

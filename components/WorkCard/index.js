import React from "react";
import Button from "../Button";

const WorkCard = ({ img, name, description, githubUrl, previewUrl }) => {
  const cardRef = React.useRef(null);
  const [transformStyle, setTransformStyle] = React.useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20; // 20 controls tilt sensitivity
    const y = -(e.clientY - top - height / 2) / 20;
    
    setTransformStyle(`perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 aspect-video shadow-md hover:shadow-2xl hover:z-10"
        style={{ 
          transform: transformStyle,
          transition: transformStyle.includes("rotateX(0deg)") ? "transform 0.5s ease" : "none" 
        }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {githubUrl && (
          <Button onClick={() => window.open(githubUrl, "_blank")}>GitHub Link</Button>
        )}
        {previewUrl && (
          <Button type="primary" onClick={() => window.open(previewUrl, "_blank")}>Live Preview</Button>
        )}
      </div>
    </div>
  );
};

export default WorkCard;

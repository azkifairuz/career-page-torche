import { useState } from "react";
import Panel from "../../../components/molecules/AccordionPanel";

export default function Accordion(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      title: "Alasan kenapa saya harus join Torche Career?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Bagaimana lingkungan kerja Torche Career?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi aliquet, faucibus metus vel, tincidunt purus. Ut nibh tortor, efficitur nec sollicitudin vel, pretium sit amet mauris. Quisque a pretium felis. Phasellus ultrices tellus nulla, eu scelerisque sapien sodales et. Ut tincidunt metus nulla, vel semper leo pulvinar sit amet. Vestibulum nibh leo, egestas vitae semper sed, hendrerit et nisi. Suspendisse sagittis est nec vehicula vehicula. Integer mattis ante dui, ac tincidunt turpis sagittis pulvinar.",
    },
    {
      title: "Berapa rentang gaji dari Torche Career?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi aliquet, faucibus metus vel, tincidunt purus. Ut nibh tortor, efficitur nec sollicitudin vel, pretium sit amet mauris. Quisque a pretium felis. Phasellus ultrices tellus nulla, eu scelerisque sapien sodales et. Ut tincidunt metus nulla, vel semper leo pulvinar sit amet. Vestibulum nibh leo, egestas vitae semper sed, hendrerit et nisi. Suspendisse sagittis est nec vehicula vehicula. Integer mattis ante dui, ac tincidunt turpis sagittis pulvinar.",
    },
    {
      title: "Bagaimana cara saya bisa join Torche Career?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi aliquet, faucibus metus vel, tincidunt purus. Ut nibh tortor, efficitur nec sollicitudin vel, pretium sit amet mauris. Quisque a pretium felis. Phasellus ultrices tellus nulla, eu scelerisque sapien sodales et. Ut tincidunt metus nulla, vel semper leo pulvinar sit amet. Vestibulum nibh leo, egestas vitae semper sed, hendrerit et nisi. Suspendisse sagittis est nec vehicula vehicula. Integer mattis ante dui, ac tincidunt turpis sagittis pulvinar.",
    },
  ];

  return (
    <div className="flex flex-col gap-[16px]">
      {data.map((item, index) => {
        return (
          <Panel
            key={index}
            title={item.title}
            content={item.content}
            isActive={activeIndex === index}
            index={index}
            setActiveIndex={setActiveIndex}
          />
        );
      })}
    </div>
  );
}

import { JSX } from "solid-js/jsx-runtime";

export default function NormalButton(props: {
  text: string;
  children?: JSX.Element;
  link?: string;
  color?: string;
  glow?: boolean;
  download?: boolean;
  newtab?: boolean;
}) {
  
  return (
    <>
      <div>

        <a
          {...(props.newtab ? { target: "_blank" } : {})} // Open in new tab?
          {...(props.download ? { download: props.text } : {})} // Download?
          href={props.link} // URL Link
          class={props.color + " " + "customfont-title font-medium p-4 rounded-lg cursor-pointer"}
          classList={{
            "hover:shadow-[0_5px_60px_-15px_rgba(186,230,253,1)] shadow-[0px_0px_50px_-15px_rgba(186,230,253,0.3)] transition ease duration-700":
              props.glow,
          }}
        >
          {props.text}
        </a>

        {props.children}

      </div>
    </>
  );
}

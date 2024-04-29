export default function NormalButton(props: {
  text: string;
  link?: string;
  color?: string;
  glow?: boolean;
}) {
  return (
    <>
      <div>
        <a
          href={props.link}
          class={props.color + " " + "customfont-title font-medium p-4 rounded-lg"}
          classList={{
            "hover:shadow-[0_5px_60px_-15px_rgba(186,230,253,1)] shadow-[0px_0px_50px_-15px_rgba(186,230,253,0.3)] transition ease duration-700":
              props.glow,
          }}
        >
          {props.text}
        </a>
      </div>
    </>
  );
}

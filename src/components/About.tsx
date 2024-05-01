type Feature = {
  name: string;
  description: string;
  color: string;
};

export default function About(props: { items: Feature[] }) {
  const { items } = props;

  return (
    <>
      <div class="customfont-base">
        <div class="flex justify-center">
          <div class="text-slate-900 md:my-14 my-10 md:space-y-4 space-y-2 md:px-20 md:w-3/4 px-3">
            <h2 class="text-5xl customfont-title font-bold">About</h2>
            <p class="md:text-2xl text-xl">
              <span class="customfont-title">Inxta</span> is a modification of
              the Android Instagram app, featuring numerous enhancements over
              the original application.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-4 grid-cols-2 md:grid-rows-2 grid-rows-4 text-slate-900 md:gap-6 gap-4 pb-16 md:px-12">
          {items.map((item) => (
            <div
              class={
                item.color +
                " " +
                " place-content-center rounded-2xl md:space-y-2 space-y-2 px-4 md:py-6 py-4 md:w-fit w-full h-full"
              }
            >
              <p class="customfont-title md:text-[27px] text-xl font-bold">
                {item.name}
              </p>
              <p class="md:text-lg text-md">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
export default function BadgesCarousel() {
  return (
    <>
      <h1 className="px-4 font-bold text-2xl text-center mt-5">Badges</h1>
      <section className="max-w-[100vw] py-5 mx-5 flex gap-4 overflow-scroll">
        <div className="relative h-[8rem] min-w-[8rem]">
          <Image src="/earth-protector.png" fill alt="badge" sizes="100%" />
        </div>
        <div className="relative h-[8rem] min-w-[8rem]">
          <Image src="/Recycling-badge.png" fill alt="badge" sizes="100%" />
        </div>
        <div className="relative h-[8rem] min-w-[8rem]">
          <Image src="/garbage-collector.png" fill alt="badge" sizes="100%" />
        </div>
      </section>
    </>
  );
}

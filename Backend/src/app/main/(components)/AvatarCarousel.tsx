import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarCarousel() {
  return (
    <>
      <h1 className="px-4 font-bold text-2xl text-center mt-5">Avatars</h1>
      <section className="max-w-[100vw] py-5 mx-5 flex gap-4 overflow-scroll">
        <div className="relative h-[8rem] min-w-[8rem]">
          <Avatar className="w-full h-full">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="relative h-[8rem] min-w-[8rem]">
          <Avatar className="w-full h-full">
            <AvatarImage
              src="https://pbs.twimg.com/profile_images/1698358649830162432/oLQRjO_8_400x400.jpg"
              alt="@shadcn"
            />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
        </div>
        <div className="relative h-[8rem] min-w-[8rem]">
          <Avatar className="w-full h-full">
            <AvatarImage
              src="https://pbs.twimg.com/profile_images/1594883630806999041/HNXBuw-o_400x400.jpg"
              alt="@shadcn"
            />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </>
  );
}

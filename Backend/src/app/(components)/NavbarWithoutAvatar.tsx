"use client";
export default function NavbarWithoutAvatar() {
  return (
    <nav className="py-5 px-10 fixed top-0 left-0 right-0 flex justify-between items-center">
      <div>
        <h1 className="font-semibold">{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      </div>
    </nav>
  );
}

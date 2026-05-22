import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center m-2">
        <h1 className="flex align-center justify-center m-6 text-white text-2xl font-bold">
          Meet The Creator
        </h1>
        <div className="border-2 border-white rounded-xl shadow-2xl">
          <Image
            src="/arriana-headshot.jpeg"
            alt="Arriana Cylthiel Cruz"
            width={250}
            height={250}
            priority
            className="rounded-xl"
          ></Image>
        </div>
        <p className="text-lg m-6 p-3 text-white shadow-xl rounded-xl">
          Crinkle Cookies may have originated in the U.S., but they became a
          beloved treat in the Philippines, where my mom remembers enjoying them
          as a rare and special dessert from her childhood. I started baking
          them whenever she craved a taste of home, and in early 2024, I turned
          that love into a small home business.
        </p>
      </div>
    </main>
  );
}

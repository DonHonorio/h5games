import JuegosFavoritos from "@/components/ui/home/juegos-favoritos";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#3B2A9F]">
      <section className="bg-banner h-[750px] bg-cover bg-no-repeat bg-center w-full text-white">
        <div className="sm:ml-40 mt-80 text-center sm:text-left max-w-[454px]">
          <h1 className="pb-5 text-4xl sm:text-5xl font-bold"
          >C3Juegos</h1>
          <p className="text-base sm:text-2xl"
          >Sube tu videojuego, y disfruta jugando y opinando los de tus compañeros.</p>
        </div>
      </section>

      <JuegosFavoritos />
    </main>
  );
}

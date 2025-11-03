import ListaCategorias from "../../componentes/categoria/listacategorias/ListaCategorias";

function Home() {
  return (
    <>
    <div className="relative w-full h-[80vh]">
      {/* Imagem principal */}
      <img
        src="/public/homePrincipal.jpg"
        alt="Atendimento na farmácia"
        className="w-full h-full object-cover"
      />

      {/* Sobreposição opcional (texto centralizado) */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à FarmaZen</h1>
        <p className="text-lg max-w-xl">
          Cuidando da sua saúde com atenção, tecnologia e confiança.
        </p>
      </div>
    </div>
    <ListaCategorias/>
    </>
  );
}

export default Home;

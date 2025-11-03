import { Link } from "react-router-dom";



function Navbar() {
   
    return (
        <>
            <div className="w-full flex justify-center py-4
                            bg-[#555555] text-white">

                                <div className="container flex justify-between text-lg mx-8">
                                    {/*Logo*/}
                                    <Link to='/home' className="flex items-center gap-2">
                                        <img 
                                        src="/logo.png" 
                                        alt="Logo FarmaZen"
                                        className="h-26 w-auto" />
                                    </Link>
                                    {/*Menu*/}
                                    <div className="flex gap-4">
                                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                                         <Link to='/categorias' className="hover:underline">Cadastrar categoria </Link>
                                         <Link to='/pedido' className='hover:underline'>Faça seu pedido</Link>
                                            <Link to='/sobre' className='hover:underline'>Sobre Nós</Link>
                                        
                                    </div>
                                </div>
                            </div>
        </>
    )
}
export default Navbar;
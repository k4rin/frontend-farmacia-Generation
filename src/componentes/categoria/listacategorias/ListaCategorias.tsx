import { useNavigate } from "react-router-dom";
import CardCategoria from "../cardcategoria/CardCategoria";
import {  useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";

function ListaCategorias(){
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [ categorias, setCategorias] = useState<Categoria[]>([])


    useEffect(()=>{
        buscarCategorias()
    }, [categorias.length])

    async function buscarCategorias(){
        try{
            setIsLoading(true)

            await buscar('/categorias', setCategorias)
        } catch (error: any){
            alert('Erro ao buscar as categorias.')  
        } finally{
            setIsLoading(false)
        }
    }

    return(
        <>
        {isLoading && (
        <SyncLoader
            color="#26253dff"
    	    size={32}
	    />
        )}
        <div className="flex justify-center w-full my-4">
           
            <div className="container flex flex-col">
                <div className="flex justify-between items-center mb-4">
                 <button className="bg-[#555555] text-white px-4 py-2 rounded hover:bg-[#333333]">
                <Link to="/categorias/cadastrar">+ Nova Categoria</Link>
                </button>
                </div>
                {(!isLoading && categorias.length === 0) && (
	                <span className="text-3xl text-center my-8">
		                Nenhuma categoria foi encontrada!
	                </span>
                )}
                <div className="grid grid-cold-1 md:grid-cols-2
                                lg:grid-cols-3 gap-8">
                                    {
                                    categorias.map((categoria) => (
    	                                <CardCategoria key={categoria.id} categoria={categoria}/>
                                    ))
                                    }
                </div>
            </div>
        </div>
        </>
    )
}
export default ListaCategorias;
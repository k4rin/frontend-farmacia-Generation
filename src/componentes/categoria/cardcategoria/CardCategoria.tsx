import {Link} from 'react-router-dom';
import type Categoria from '../../../models/Categoria';

interface CardCategoriaProps{
    categoria: Categoria;
}
function CardCategoria({categoria}: CardCategoriaProps){
    return(
        <div className='border-gray-400 flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#555555] text-white font-bold text-2xl'>{categoria.nome}</header>
            <p className='p-8 text-3xl bg-[#fffafa] h-full'>{categoria.descricao}</p>

            <div className='flex'>

                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-blue-500 hover:bg-blue-600
                        flex items-center justify-center py-2'>

                            <button>Editar</button>
                        </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} 

                    className='text-slate-100 bg-red-500 hover:bg-red-600 w-full
                    flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
            </div>
        </div>
    )
}

export default CardCategoria;
import { FerramentaDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Pessoas = ()=>{
    return(
        <LayoutBaseDePagina titulo="Pessoas" barraDeFerramentas ={<FerramentaDeDetalhe mostrarBotaoSalvarEFechar/>} />
    );
};
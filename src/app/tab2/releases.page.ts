import {Component} from '@angular/core';
import {Investimento} from "../model/investimento";
import {TipoAtivoEnum} from "../model/TipoAtivoEnum";

@Component({
    selector: 'app-tab2',
    templateUrl: 'releases.page.html',
    styleUrls: ['releases.page.scss']
})
export class ReleasesPage {

    listaInvestimentos: Investimento[] = [
        {
            id: 1,
            data: new Date(),
            tipoAtivo: TipoAtivoEnum.ACAO,
            corretoraOrBanco: "Rico",
            valor: 10
        },
        {
            id: 1,
            data: new Date(),
            tipoAtivo: TipoAtivoEnum.FII,
            corretoraOrBanco: "Rico",
            valor: 20
        },
        {
            id: 1,
            data: new Date(),
            tipoAtivo: TipoAtivoEnum.CRIPITO,
            corretoraOrBanco: "Binance",
            valor: 10
        },
        {
            id: 1,
            data: new Date(),
            tipoAtivo: TipoAtivoEnum.ETF_EXTERIOR,
            corretoraOrBanco: "Nomad",
            valor: 50
        },
        {
            id: 1,
            data: new Date(),
            tipoAtivo: TipoAtivoEnum.STOCKS,
            corretoraOrBanco: "Nomad",
            valor: 10
        }
    ]

    constructor() {
    }

    onClickTrash(lancamento: Investimento) {
        //TODO colocar um alert to confirm
        this.listaInvestimentos.splice(this.listaInvestimentos.indexOf(lancamento), 1);
    }

    onClickPlusRelease() {
        console.log('Evento chegando')
        //Todo implementar new Release modal
    }
}

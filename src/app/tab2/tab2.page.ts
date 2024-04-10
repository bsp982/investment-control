import {Component} from '@angular/core';
import {Investimento} from "../model/investimento";
import {TipoAtivoEnum} from "../model/TipoAtivoEnum";

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    listaInvestimentos: Investimento[] = [
        {
            id: 1,
            data: new Date(),
            tipoAtivo: TipoAtivoEnum.ACAO,
            corretoraOrBanco: "Corretora XYZ",
            ativo: "XYZ123",
            valor: 10
        },
        {
            id: 1,
            data: new Date(),
            tipoAtivo: TipoAtivoEnum.FII,
            corretoraOrBanco: "Corretora XYZ",
            ativo: "XYZ123",
            valor: 20
        },
        {
            id: 1,
            data: new Date(),
            tipoAtivo: TipoAtivoEnum.CRIPITO,
            corretoraOrBanco: "Corretora XYZ",
            ativo: "XYZ123",
            valor: 10
        },
        {
            id: 1,
            data: new Date(),
            tipoAtivo: TipoAtivoEnum.ETF_EXTERIOR,
            corretoraOrBanco: "Corretora XYZ",
            ativo: "XYZ123",
            valor: 50
        },
        {
            id: 1,
            data: new Date(),
            tipoAtivo: TipoAtivoEnum.STOCKS,
            corretoraOrBanco: "Corretora XYZ",
            ativo: "XYZ123",
            valor: 10
        }
    ]

    constructor() {
    }

}

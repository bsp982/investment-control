import {Investimento} from "../model/investimento";
import {TipoAtivoEnum} from "../model/TipoAtivoEnum";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ReleasesService {

    constructor() {
    }

    public getReleases() {
        let listaInvestimentos: Investimento[] = [
            {
                id: 1,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.ACAO,
                corretoraOrBanco: "Rico",
                valor: 10
            },
            {
                id: 2,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.FII,
                corretoraOrBanco: "Rico",
                valor: 20
            },
            {
                id: 3,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.CRIPITO,
                corretoraOrBanco: "Binance",
                valor: 10
            },
            {
                id: 4,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.ETF_EXTERIOR,
                corretoraOrBanco: "Nomad",
                valor: 50
            },
            {
                id: 5,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.STOCKS,
                corretoraOrBanco: "Nomad",
                valor: 10
            },
            {
                id: 6,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.ACAO,
                corretoraOrBanco: "Rico",
                valor: 30
            },
            {
                id: 7,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.FII,
                corretoraOrBanco: "Rico",
                valor: 40
            },
            {
                id: 8,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.CRIPITO,
                corretoraOrBanco: "Binance",
                valor: 25
            },
            {
                id: 9,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.ETF_EXTERIOR,
                corretoraOrBanco: "Nomad",
                valor: 60
            },
            {
                id: 10,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.STOCKS,
                corretoraOrBanco: "Nomad",
                valor: 15
            },
            {
                id: 11,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.ACAO,
                corretoraOrBanco: "Rico",
                valor: 35
            },
            {
                id: 12,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.FII,
                corretoraOrBanco: "Rico",
                valor: 45
            },
            {
                id: 13,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.CRIPITO,
                corretoraOrBanco: "Binance",
                valor: 30
            },
            {
                id: 14,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.ETF_EXTERIOR,
                corretoraOrBanco: "Nomad",
                valor: 70
            },
            {
                id: 15,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.STOCKS,
                corretoraOrBanco: "Nomad",
                valor: 20
            },
            {
                id: 16,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.ACAO,
                corretoraOrBanco: "Rico",
                valor: 40
            },
            {
                id: 17,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.FII,
                corretoraOrBanco: "Rico",
                valor: 35
            },
            {
                id: 18,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.CRIPITO,
                corretoraOrBanco: "Binance",
                valor: 20
            },
            {
                id: 19,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.ETF_EXTERIOR,
                corretoraOrBanco: "Nomad",
                valor: 80
            },
            {
                id: 20,
                data: new Date(),
                tipoAtivo: TipoAtivoEnum.STOCKS,
                corretoraOrBanco: "Nomad",
                valor: 25
            }
        ]

        return listaInvestimentos;
    }
}

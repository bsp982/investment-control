import {Component} from '@angular/core';
import {Investimento} from "../model/investimento";
import {TipoAtivoEnum} from "../model/TipoAtivoEnum";

@Component({
    selector: 'app-tab1',
    templateUrl: 'general.control.page.html',
    styleUrls: ['general.control.page.scss']
})
export class GeneralControlPage {
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

    chartOptions = {
        animationEnabled: true,
        data: [{
            type: "doughnut",
            yValueFormatString: "#,###.##'%'",
            dataPoints: this.getDataPoints(this.listaInvestimentos)
        }]
    }

    private getDataPoints(listaInvestimentos: Investimento[]) {

        const investimentosAgrupados = listaInvestimentos.reduce((agrupado: {
            [tipo: string]: number
        }, investimento) => {
            const {tipoAtivo, valor} = investimento;
            if (agrupado[tipoAtivo]) {
                agrupado[tipoAtivo] += valor;
            } else {
                agrupado[tipoAtivo] = valor;
            }
            return agrupado;
        }, {});


        return Object.entries(investimentosAgrupados).map(([tipo, valor]) => ({
            y: valor,
            name: tipo
        }));
    }

    constructor() {


    }


}

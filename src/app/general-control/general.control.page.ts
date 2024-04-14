import {Component} from '@angular/core';
import {ReleasesService} from "../service/releases.service";
import {CardInvestVO} from "../model/vo/cardInvestVO";
import {Investimento} from "../model/investimento";

@Component({
    selector: 'app-general-control-page',
    templateUrl: 'general.control.page.html',
    styleUrls: ['general.control.page.scss']
})
export class GeneralControlPage {

    chartOptions = {
        animationEnabled: true,
        data: [{
            type: "doughnut",
            yValueFormatString: "#,###.##'%'",
            dataPoints: this.getDataPointsChart()
        }]
    }

    cardInvestListVO: CardInvestVO[] = [];

    constructor(private releaseService: ReleasesService) {
        let releases = this.releaseService.getReleases();

        const calcularTotalPorTipoAtivo = (investimentos: Investimento[]): CardInvestVO[] => {
            const totalPorTipo: { [key: string]: number } = {};

            investimentos.forEach(investimento => {
                const {tipoAtivo, valor} = investimento;
                totalPorTipo[tipoAtivo] = (totalPorTipo[tipoAtivo] || 0) + valor;
            });

            const cardInvestArray: CardInvestVO[] = Object.keys(totalPorTipo).map(tipoAtivo => ({
                tipoAtivo,
                valor: totalPorTipo[tipoAtivo]
            }));

            return cardInvestArray;
        };

        this.cardInvestListVO = calcularTotalPorTipoAtivo(releases);
    }

    private getDataPointsChart() {
        let listaInvestimentos = this.releaseService.getReleases();

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


    getSomaTotal(cardInvestListVO: CardInvestVO[]) {
        let total = 0;
        cardInvestListVO.forEach(item => {
            total += item.valor;
        });
        return total;
    }
}

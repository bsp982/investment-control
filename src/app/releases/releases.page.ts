import {Component} from '@angular/core';
import {Investimento} from "../model/investimento";
import {ReleasesService} from "../service/releases.service";
import {AlertController} from "@ionic/angular";
import {AlertUtil} from "../utils/AlertUtil";

@Component({
    selector: 'app-releases-page',
    templateUrl: 'releases.page.html',
    styleUrls: ['releases.page.scss']
})
export class ReleasesPage {
    listaInvestimentos: Investimento[] = []

    constructor(private releaseService: ReleasesService,
                private alertController: AlertController) {
        this.listaInvestimentos = this.releaseService.getReleases()
    }

    async onClickTrash(lancamento: Investimento) {
        await AlertUtil.confirm(
            this.alertController,
            'Confirmação',
            'Deseja excluir esse lançamento?',
            () => {
                this.listaInvestimentos.splice(this.listaInvestimentos.indexOf(lancamento), 1);
            },
            null,
            null
        );
    }


    onClickPlusRelease() {
        console.log('Evento chegando')
        //Todo implementar new Release modal
    }
}

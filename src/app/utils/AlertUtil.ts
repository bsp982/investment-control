import {AlertController} from "@ionic/angular";

export class AlertUtil {
    public static async confirm(
        alertController: AlertController,
        titleMessage: string,
        askMessage: string,
        successCallback,
        refuseButtonText?: string,
        acceptButtonText?: string,
        failCallback?) {


        let alert = await alertController.create({
            backdropDismiss: false,
            header: titleMessage,
            message: askMessage,
            buttons: [
                {
                    text: refuseButtonText ? refuseButtonText : "Não",
                    handler: () => {
                        if (failCallback != null) {
                            failCallback();
                        }
                    }
                },
                {
                    text: acceptButtonText ? acceptButtonText : "Sim",
                    handler: () => {
                        successCallback();
                    }
                }
            ]
        });

        await alert.present().catch(() => {
            failCallback();
        });
    }
}


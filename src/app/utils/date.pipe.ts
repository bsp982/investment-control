import {Pipe, PipeTransform} from '@angular/core';
import * as moment from "moment";

@Pipe({
    name: 'datetime'
})
export class DatePipe implements PipeTransform {
    transform(date: Date, fmt?: any): any {
        if (date == null) {
            return 'N/A';
        }

        if (fmt != null) {
            return moment(date).format(fmt);
        }

        return moment(date).format('DD/MM/YYYY HH:mm:ss');
    }
}

import { NativeDateAdapter } from "@angular/material/core";
import * as moment from "moment";

export class UserDateAdapter extends NativeDateAdapter {
    parse(value: any): Date | null {
        if (moment(value, "DD/MM/YYYY", true).isValid()) {
            return new Date(+moment(value, "DD/MM/YYYY", true).format('YYYY'), +moment(value, "DD/MM/YYYY", true).format('MM') - 1, +moment(value, "DD/MM/YYYY", true).format('DD'));
        } else {
            return null;
        }
    }
}
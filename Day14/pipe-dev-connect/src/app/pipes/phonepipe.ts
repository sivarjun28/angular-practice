import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phone',
    standalone: true
})
export class PhonePipe implements PipeTransform {
    transform(
        value: string | number
    ): string {
        if (!value) {
            return '';
        }
        const phone = value
            .toString()
            .replace(/\D/g, '');

        if (phone.length !== 10) {
            return value.toString();
        }

        return `(${phone.slice(0,3)}) ${phone.slice(3, 6)} - ${phone.slice(6)}`;

    }
}
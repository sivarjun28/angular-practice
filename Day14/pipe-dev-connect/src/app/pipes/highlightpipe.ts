import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'highlight',
    standalone: true
})

export class HighlightPipe implements PipeTransform {
    transform(value: string, searchText: string): string {
        if (!value || !searchText) {
            return value;
        }

        const regex =
            new RegExp(`(${searchText})`, 'gi')

        return value.replace(
            regex, '<mark>$1</mark>'
        );

    }
}
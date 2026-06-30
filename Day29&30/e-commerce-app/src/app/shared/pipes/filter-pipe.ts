import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(
    items: any[],
    searchTerm: string,
    category: string,
    maxPrice: number
  ): any[] {

    if (!items) return [];

    return items.filter(item => {

      const matchesSearch =
        !searchTerm ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        !category || item.category === category;

      const matchesPrice =
        !maxPrice || item.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }
}
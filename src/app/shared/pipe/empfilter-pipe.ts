import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empfilter',
})
export class EmpfilterPipe implements PipeTransform {
  transform(employees: any[], filter: string): any {

    if(!employees || !filter) {
      return employees
    }

    return employees.filter((emp) => {emp.city.toLowerCase().includes(filter.toLocaleLowerCase())});
  }
}

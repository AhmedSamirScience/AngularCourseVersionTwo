import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testCustomizedPipe',
  standalone: true
})
export class TestCustomizedPipePipe implements PipeTransform {

  transform(value: string): string {
    return 'Hello from pipe, ' + value + '!';
  }

}

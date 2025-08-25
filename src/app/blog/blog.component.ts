import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TestCustomizedPipePipe } from '../pipes/test-customized-pipe.pipe';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, SlicePipe, JsonPipe, PercentPipe, CurrencyPipe, TestCustomizedPipePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  userName = 'Jane Smith';
  todayDate = new Date();
  price = 1234.56;
  percentage = 0.75;
  user = { name: 'Alice', age: 30, city: 'New York' };
  userfriends = ['Bob', 'Charlie', 'David', 'Eve', 'Frank'];
  userCustomized = 'Ahmed Samir';


}

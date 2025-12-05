import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usage.html',
  styleUrls: ['./usage.css']
})
export class UsageComponent {
  // Esto lo hice yo en la uni, para que el componente sea standalone y no dependa de nada raro
}
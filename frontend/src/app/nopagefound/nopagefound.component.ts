import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrl: './nopagefound.component.css'
})
export class NopagefoundComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  year = new Date().getFullYear()
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-list',
  imports: [CommonModule],
  templateUrl: './serie-list.html',
  styleUrl: './serie-list.css',
})
export class SerieList implements OnInit {

  series: Serie[] = [];

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
    });
  }
}

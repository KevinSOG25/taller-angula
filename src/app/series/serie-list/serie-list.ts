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
  selectedSerie: Serie | null = null;
  averageSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
      this.calculateAverage();
    });
  }

  calculateAverage(): void {
    if (this.series.length > 0) {
      this.averageSeasons = this.series.reduce((sum, s) => sum + s.seasons, 0) / this.series.length;
    }
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }
}

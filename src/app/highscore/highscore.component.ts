import { Component, OnInit, OnDestroy } from '@angular/core';
import { HighscoreService, Score } from '../highscore.service';
import { CommonModule, NgFor } from '@angular/common';
import { SorthttpPipe } from '../sorthttp.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-highscore',
  standalone: true,
  imports: [NgFor, SorthttpPipe, CommonModule],
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.scss'],
})
export class HighscoreComponent implements OnInit, OnDestroy {
  public highscores: Score[] = [];
  public sortHttpBy: string = 'score';
  public sortHttpByAscDesc: string = 'desc';
  private scoresSub: Subscription = new Subscription;

  constructor(private _highscoreService: HighscoreService) {}

  ngOnInit() {
    this.loadHighscores();
    this.scoresSub = this._highscoreService
      .getScoresUpdatedListener()
      .subscribe(() => {
        this.loadHighscores();
      });
  }

  ngOnDestroy() {
    this.scoresSub.unsubscribe();
  }

  loadHighscores() {
    this._highscoreService.load().subscribe((data: Score[]) => {
      this.highscores = data;
    });
  }

  onSortOrderChange(event: Event) {
    this.sortHttpByAscDesc = (event.target as HTMLSelectElement).value;
  }
}

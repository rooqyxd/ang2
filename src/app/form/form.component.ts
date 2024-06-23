import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { CommonModule, NgIf } from '@angular/common';
import { NgxSnakeModule } from 'ngx-snake';
import { Router } from '@angular/router';
import { PlayerDataService } from '../playerdata.service';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgxSnakeModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  // @Output() public userCreated = new EventEmitter<User>();
  // @Output() public showSnakeEvent = new EventEmitter<boolean>();
  constructor(
    private _router: Router,
    public _playerDataService: PlayerDataService
  ) {}
  public name = '';
  public email = '';
  public user: User | null = null;
  public colorPalette = 'normal';
  public isSnakeVisible = false;
  public onSubmit() {
    if (!this.name || this.name.length < 2) {
      alert('Invalid name');
      return;
    }
    if (!this.email || !this.validateEmail(this.email)) {
      alert('Invalid e-mail');
      return;
    }
    this._playerDataService.setPlayerData({
      name: this.name,
      email: this.email,
    });
    const user = {
      name: this.name,
      email: this.email,
    };
    // this.user = user;
    // console.log(JSON.stringify(user.name));
    // console.log(`name ${this.name} email ${this.email}`);
    // console.log(`user to ${user}`);
    // console.log(`this user to ${this.user}`);
    // console.log(`... user to ${{ ...user }}`);

    // this.userCreated.emit(user);
    this.openSnake();
    this.name = '';
    this.email = '';
    this._router.navigate(['/snake', this.colorPalette]);
  }
  public openSnake() {
    this.isSnakeVisible = true;
    // this.showSnakeEvent.emit(true);
  }
  public closeSnake() {
    this.isSnakeVisible = false;
    // this.showSnakeEvent.emit(false);
  }
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  ngOnInit(): void {}
}

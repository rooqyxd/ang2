import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { HotkeysModule } from '@ngneat/hotkeys';
import { User } from './user';
import { SnakeContainingComponentComponent } from './snake-containing-component/snake-containing-component.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormComponent,
    HotkeysModule,
    SnakeContainingComponentComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSnake = false;
  @Input() public user: User | null = null;

  onShowSnake(event: boolean) {
    this.showSnake = event;
  }

  onUserCreated(user: User) {
    this.user = user;
    console.log(`w app ${this.user}`);
    console.log(`w app user ${user}`);
  }

  public onShowSnakeChange(show: boolean) {
    this.showSnake = show;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerDataService } from '../playerdata.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public playerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private playerDataService: PlayerDataService
  ) {
    this.playerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      authCode: ['', [Validators.required, Validators.minLength(5)]],
      color: ['normal'],
    });
  }

  ngOnInit(): void {
    this.loadFromLocalStorage();
  }

  onSubmit() {
    if (this.playerForm.valid) {
      const { name, authCode, color } = this.playerForm.value;
      this.playerDataService.setPlayerData({ name });

      this.saveToLocalStorage({ name, color });
      this.router.navigate(['/snake', color]);
    } else {
      alert('wypelnij poprawnie');
    }
  }

  private loadFromLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem('playerData') || '{}');
    if (storedData.name) {
      this.playerForm.patchValue({ name: storedData.name });
    }
    if (storedData.color) {
      this.playerForm.patchValue({ color: storedData.color });
      this.applyColorChange(storedData.color);
    }
  }

  private saveToLocalStorage(data: { name: string; color: string }) {
    localStorage.setItem('playerData', JSON.stringify(data));
  }

  onColorChange(event: Event) {
    const selectedColor = (event.target as HTMLSelectElement).value;
    this.applyColorChange(selectedColor);
  }

  private applyColorChange(color: string) {
    const element = document.getElementById('someElement');
    if (element) {
      if (color === 'high-contrast') {
        element.style.color = 'pink';
      } else {
        element.style.filter = 'none';
      }
    }
  }
}

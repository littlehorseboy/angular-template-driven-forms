import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {
  powers = [
    'Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer',
  ];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chunk Overstreet');

  submitted = false;

  get diagnostic() {
    return JSON.stringify(this.model, null, 2);
  }

  onSubmit() {
    this.submitted = true;
  }
}

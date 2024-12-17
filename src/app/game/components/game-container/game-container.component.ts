import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scene } from '@model/scene.model';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-container.component.html'
})
export class GameContainerComponent implements OnInit {
  scene!: Scene;

  constructor(private router: Router) {
    this.initStoryState();
  }

  ngOnInit(): void {
    if (!this.scene) {
      this.router.navigate(['/']);
    }
  }

  private initStoryState(): void {
    const navigation = this.router.getCurrentNavigation();
    const data = navigation?.extras.state?.['data'];
    if (data) {
      this.scene = {
        ...data,
        choices: data.links
      };
    }
  }

}

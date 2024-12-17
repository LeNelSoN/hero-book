import { Component, Input } from '@angular/core';
import { Link } from '@model/link.model';
import { Scene } from '@model/scene.model';
import { HateoasService } from '@service/hateoas.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss'
})
export class GameBoardComponent {
  @Input() scene!: Scene;

  constructor(private hateoas: HateoasService) {}

  selectChoice(choice: Link): void {
    this.hateoas.fetchResource<any>(choice).subscribe(
      (scene) => {
        this.scene = {
          ...scene,
          choices: scene.links || []
        };
      }
    );
  }
}

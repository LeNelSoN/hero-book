import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from '@model/link.model';
import { RedirectKey } from 'src/app/core/constant/RedirectKey';
import { HateoasService } from '@service/hateoas.service';
import { Scene } from '@model/scene.model';

@Component({
  selector: 'link-action',
  templateUrl: './link-action.component.html',
  styleUrl: './link-action.component.scss'
})
export class LinkActionComponent {
  @Input() link!: Link;
  @Input() selectedRedirection!: RedirectKey;

  constructor(private router: Router, private hateoas: HateoasService) {}

  private redirections: { [key in RedirectKey]: (data: any) => void } = {
    [RedirectKey.GAME]: (data: any) => {
      this.router.navigate(['/game'], { state: { data } });
    },
    [RedirectKey.DEFAULT]: (data: any) => {
      console.log('No specific redirection. Data:', data);
    }
  };

  performAction(): void {
    this.hateoas.fetchResource(this.link).subscribe(
      (data) => {
        const redirection = this.redirections[this.selectedRedirection] || this.redirections["default"];
        redirection(data);
      }
    );
  }
}

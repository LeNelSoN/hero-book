import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Link } from '@model/link.model';
import { StoryAdapter } from '../helper/story.adapter';

@Injectable({
  providedIn: 'root'
})
export class HateoasService {

  constructor(private http: HttpClient, private adapter: StoryAdapter) { }

  fetchResource<T>(link: Link ): Observable<T> {
    return this.http.request<T>(link.type, link.href).pipe(
      map(resource => this.replaceLinksKeys(resource))
    );
  }

  replaceLinksKeys(resource: any): any {
    if (resource._links) {
      const links = resource._links.next ? this.adapter.adaptIsAnArray(resource._links.next) : [];
      delete resource._links;
      resource.links = links;
    }
    return resource;
  }
}

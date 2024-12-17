import { Link } from "./link.model";

export interface Story {
  title: string;
  description: string;
  links: Link[];
}

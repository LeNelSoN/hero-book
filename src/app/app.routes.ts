import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "story",
    loadChildren: () => import("./story/story.module").then(m => m.StoryModule)
  },
  {
    path: "game",
    loadChildren: () => import("./game/game.module").then(m => m.GameModule)
  },
  {
    path: "login",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  { path: "**", redirectTo: "" }
];

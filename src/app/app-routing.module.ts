import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {YotubePlaylistComponent} from './yotube-playlist/yotube-playlist.component';

const routes: Routes = [
    {
        path: 'youtube',
        component: YotubePlaylistComponent,
        children: [{
            path: ':id',
            component: YoutubePlayerComponent
        }]
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

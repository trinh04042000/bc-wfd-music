import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';

@Component({
  selector: 'app-yotube-playlist',
  templateUrl: './yotube-playlist.component.html',
  styleUrls: ['./yotube-playlist.component.css']
})
export class YotubePlaylistComponent implements OnInit {

  constructor(public youtubeService: YoutubeService) { }

  ngOnInit() {
  }

}

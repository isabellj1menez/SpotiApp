import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  public idArtist: string = "";
  public Artist: any;
  public topTracks: any;
  public loading: boolean = true;

  constructor(private spotifyService: SpotifyService, private activatedRoute: ActivatedRoute) {
    setTimeout(()=>{
      this.loading=false;
    },2000) 
    this.idArtist = this.activatedRoute.snapshot.paramMap.get('id');

    this.spotifyService.getTopTrackArtist(this.idArtist).subscribe((data:any) => {
      this.topTracks = data.tracks;
      // console.log(this.topTracks)
      this.spotifyService.ArtistInfo(this.idArtist).subscribe((data) => {
        this.Artist = data;
        console.log(this.Artist)
      })
    })
  }

  ngOnInit() {
  }

}

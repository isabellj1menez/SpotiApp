import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public NewReleases: Array<any>=[];
  public loading: boolean = true;

  constructor( private spotifyService: SpotifyService) {
    this.spotifyService.GetNewRelases().subscribe((releases:any)=>{
      this.NewReleases = releases.albums.items

 setTimeout(()=>{
      this.loading=false;
    },2000) 

      console.log(releases.albums.items)
    })
   // console.log(this.NewReleases)todabia no se llena cuando la consoleas por que subscribe es una funcion asincrona
   } 

  ngOnInit() {
  }

}

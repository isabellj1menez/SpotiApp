import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public searchFilter:Array<string>= ['track','artist'];

  public searcresults:any=[];
  public loading: boolean = true;


  constructor(private spotifyService:SpotifyService, private router:Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.loading=false;
    },2000) 
  }

  public search(type,termino){

    if(type == 'null' || termino == '' || termino ===" ")return

    this.spotifyService.searchdata(termino,type).subscribe((data:any)=>{
        //  console.log(data);
      if(data.tracks){
        this.searcresults = data.tracks.items
      }else{
        this.searcresults = data.artists.items
      }

      console.log(this.searcresults)
    })
    // console.log(type,termino)
  }

  public GotoArtist(artistId){
    // console.log(artistId)
    this.router.navigate(['/artist', artistId])
  }
}

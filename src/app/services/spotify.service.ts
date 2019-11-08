import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  private headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQBOypw3yKlLhUPXtFQJQBzZ4haVlNPPpOnKdnp6uyz2-S8We_qM2xIxIzrtk-aW3mQdxbVf0NOY05Luhqo'
  })

  private URL: string = 'https://api.spotify.com/v1'

  public GetNewRelases() {
    return this.http.get(`${this.URL}/browse/new-releases?country=mx&limit=12`, { headers: this.headers });
  }

  public searchdata(termino, type) {

    termino = encodeURI(termino)

    let URLSend: string = `${this.URL}/search?q=${termino}&type=${type}&market=mx&limit=9`

    return this.http.get(URLSend, { headers: this.headers })
  }

  public getTopTrackArtist(idArtist) {
    let urlSend = `${this.URL}/artists/${idArtist}/top-tracks?country=mx`;
    return this.http.get(urlSend, { headers: this.headers })
  }

  public ArtistInfo(idArtist){
    let urlArtInfo = `${this.URL}/artists/${idArtist}`;
    return this.http.get(urlArtInfo, {headers: this.headers})
  }

}

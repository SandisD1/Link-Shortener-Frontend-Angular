import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


interface AggregatedStats {
  totalShortenedUrlCount: number,
  shortenedUrlsConsumedCount: number;
}

interface GridTile {
  color: string;
  cols: number;
  rows: number;
}

interface ShortenRequest {
  url: string,
  expiration?: {
    unit: "days" | "weeks",
    amount: number
  }
}

interface ReceivedShortUrl {
  url: string,
  expires?: string
}

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css']
})


export class ShortenerComponent implements OnInit {

  sidebar: GridTile = {cols: 4, rows: 16, color: 'lightblue'}

  horizontalSep: GridTile = {cols: 8, rows: 1, color: ''}

  header: GridTile = {cols: 8, rows: 2, color: ''}

  seperator: GridTile = {cols: 1, rows: 2, color: ''}

  button: GridTile = {cols: 2, rows: 2, color: ''}

  formSide: GridTile = {cols: 2, rows: 16, color: ""}

  SHORTEN_URL: string = "/api/shortened-urls/shorten"

  GET_STATS_URL: string = "/api/statistics/shortened-urls"

  newPost$?: Observable<ReceivedShortUrl>

  inputValue = ""

  expirationUnit?: "days" | "weeks"

  daysList: number[] = [1, 2, 3, 4, 5, 6, 7]

  expirationAmount = 1

  aggregatedStats$?: Observable<AggregatedStats>

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }


  shorten(): void {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json;charset=UTF-8')

    let options = {headers: headers};

    let data: ShortenRequest;

    if (this.expirationUnit) {
      data = {
        url: this.inputValue,
        expiration: {
          unit: this.expirationUnit,
          amount: this.expirationAmount
        }
      }
    } else {
      data = {
        url: this.inputValue
      }
    }
    console.log("sent")
    this.newPost$ = this.http.post<ReceivedShortUrl>(this.SHORTEN_URL, JSON.stringify(data), options)
  }

  getStats() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json;charset=UTF-8')

    let options = {headers: headers};

    console.log("stats called")

    this.aggregatedStats$ = this.http.get<AggregatedStats>(this.GET_STATS_URL, options)
  }

  setActive(buttonName?: "days" | "weeks") {

    this.expirationAmount = 1

    this.expirationUnit = buttonName;
  }

  isActive(buttonName: string) {
    return this.expirationUnit === buttonName;
  }

  moreWeeks() {
    this.expirationAmount += 1
  }

  lessWeeks() {
    this.expirationAmount -= 1
  }
}

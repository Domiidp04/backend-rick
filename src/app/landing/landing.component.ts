import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Character } from '../model/Character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  data: Character[] = [];
  pageInfo: any;  // Add this line to store page information
  page: number = 1;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.llenarData();
  }
  

  llenarData(){
    this.apiService.getData().subscribe( data => {
      console.log(data);  // Log the response to the console
      const { info, results } = data;
      this.data = results;
      this.pageInfo = info;
    });
  }
  

  // Function to load next page
  loadNextPage(): void {
    this.apiService.nextPage();
    this.llenarData();
  }

  // Function to load previous page
  loadPrevPage(): void {
    this.apiService.prevPage();
    this.llenarData();
  }

  showCharacterDetails(characterId: number): void {
    this.router.navigate(['character', characterId]);
  }

 
}

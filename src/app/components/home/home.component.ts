import { Component } from '@angular/core';
import { CharacterInfo } from '../../models/characterInfo';
import { DrangonServiceService } from '../../services/drangon-service.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Info } from '../../models/info';
import { animate } from '@angular/animations';
import { CharacterById } from '../../models/characterById';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  cardsToShow: CharacterInfo[] = [];
  constructor(readonly dragonSeervice: DrangonServiceService) {}

  ngOnInit(): void {
    this.dragonSeervice.getAll().subscribe({
      next: (response: Info) => {
        response.items.forEach((element: CharacterInfo) => {
          this.cardsToShow.push(element)
        });

        console.log(this.cardsToShow);
        
      },
      error: (err) => {
        console.log("Error fetching data for currency: " + err);
      }
    });
  }

  submit(id: number): void {
    let idParsed = String(id);

    this.dragonSeervice.getCharacter(idParsed).subscribe({
      next: (response: any) => {
        let data = JSON.stringify(response) 
        alert(data);
        
      },
      error: (err) => {
        console.log("Error fetching data for currency: " + err);
      }
    });
  }

}

import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  equipes: any;
  constructor(private equipeService: EquipeService, private router: Router) {}

  ngOnInit() {
    this.equipeService.getAllEquipes().subscribe((data) => {
      this.equipes = data;
    });
  }
  loadEquipes() {
    this.equipeService.getAllEquipes().subscribe(
      (data) => {
        this.equipes = data;
      },
      (error) => {
        console.error('Error fetching equipes:', error);
      }
    );
  }

  deleteEquipe(equipe: any) {
    const userConfirmed = window.confirm('Are you sure you want to delete this equipe?');
    if (userConfirmed) {

    this.equipeService.deleteEquipeById(equipe._id).subscribe(
      (response) => {
        console.log(equipe);
        console.log('Equipe deleted successfully:', response);
        this.loadEquipes();
      },
      (error) => {
        console.error('Error deleting equipe:', error);
      }
    );}
  }

  updateEquipe(equipe: any) {
    console.log('Update clicked for equipe:', equipe);
    this.router.navigate(['/update/', equipe._id]);
  }
}

import { EquipeService } from 'src/app/services/equipe.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private equipeService: EquipeService,private router: Router) {}

  handleAddEquipe(equipeForm: any) {
    const newEquipe = {
      name: equipeForm.value.name,
      country: equipeForm.value.country
    };

    this.equipeService.addEquipe(newEquipe).subscribe(
      response => {
        console.log(newEquipe);
        this.router.navigate(['/equipe/list']);
        console.log('Equipe added successfully:', response);
            },
      error => {
        console.error('Error adding equipe:', error);
      }
    );
  }
}

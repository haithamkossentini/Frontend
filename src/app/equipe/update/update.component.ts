import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  id: any;
  name: any;
  country: any;
  constructor(
    private service: EquipeService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.service.getEquipeById(this.id).subscribe((equipe: any) => {
      this.name = equipe.name;
      this.country = equipe.country;
      console.log(equipe);
    });
  }
  updateEquipe() {
    let equipe = {
      id: this.id,
      name: this.name,
      country: this.country,
    };
    this.service
      .updateEquipe(equipe)
      .subscribe((data) => this.router.navigate(['equipe/list']));
  }
}

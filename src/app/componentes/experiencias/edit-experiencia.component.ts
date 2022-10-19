import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SExperienciaService } from 'src/app/modelos/s-experiencia.service';
import { Experiencia } from 'src/app/modelos/experiencia';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
expLab : Experiencia = null;


  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, 
    private Router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
this.sExperiencia.detail(id).subscribe(
  data =>{
    this.expLab = data;

  }, err => {
    alert("Error al modificar experiencia");
    this.Router.navigate(['']);
  }
)
  }


  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
       this.Router.navigate(['']); ;
      }, err =>{
        alert("Error al modificar experiencia");
        this.Router.navigate(['']);
      }
    )
  }

}

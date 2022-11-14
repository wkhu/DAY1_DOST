import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  id: string;
  ingredients: string[];
  test = [
    {"name":"Adobo", "ingredients":["Chicken", "Egg", "Salt", "Soy Sauce", "Vinegar"]},
    {"name":"Tinola", "ingredients":["Chicken", "Chicken Broth Cubes", "Salt", "Water", "Ginger"]},
    {"name":"Sinigang", "ingredients":["Shrimp", "Tomato", "Shrimp Broth Cubes", "Water", "Radish", "Okra"]}
  ];
  name: string;

  constructor(
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    switch(this.id){
      case '1':{
        this.name = this.test[0]["name"];
        this.ingredients = this.test[0]["ingredients"]
        break;
      }
      case '2':{
        this.name = this.test[1]["name"];
        this.ingredients = this.test[1]["ingredients"]
        break;
      }
      case '3':{
        this.name = this.test[2]["name"];
        this.ingredients = this.test[2]["ingredients"]
        break;
      }
    }
  }

}

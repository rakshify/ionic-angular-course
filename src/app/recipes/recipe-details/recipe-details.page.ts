import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RecipesService } from '../recipes.service';
import { IRecipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  recipe: IRecipe;

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        return;
      }
      const recipeId: string = paramMap.get('recipeId') || '';
      this.recipe = this.recipesService.getRecipe(recipeId);
    });
  }

}

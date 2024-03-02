import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecipesService } from '../recipes.service';
import { IRecipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  recipe: IRecipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId: string = paramMap.get('recipeId') || '';
      this.recipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: "are you sure?",
      message: "Do you really want to delete the recipe?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.recipe.id || '');
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {alertEl.present();})
  }

}

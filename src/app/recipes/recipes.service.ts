import { Injectable } from '@angular/core';

import { IRecipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: IRecipe[] = [
    {
      id: 'r1',
      title: 'pew',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fproduct-image.juniqe-production.juniqe.com%2Fmedia%2Fcatalog%2Fproduct%2Fseo-cache%2Fx800%2F678%2F38%2F678-38-101L%2FPew-Pew-Octavian-Poster.jpg&f=1&nofb=1&ipt=c5be24e1046af935e5da73b1a8e93828032c1e72502d5823c5e8cc1a469e54ea&ipo=images',
      ingredients: ['p', 'e', 'w']
    },
    {
      id: 'r2',
      title: 'hurr-durr',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Ffacebook%2F000%2F270%2F683%2Fdeb.jpg&f=1&nofb=1&ipt=108c3d2b91c7fa7c6f1f1c0cc8dc9ac77a08401e59ca78bae5ac27809852f895&ipo=images',
      ingredients: ['hurr', 'durr']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}

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
}

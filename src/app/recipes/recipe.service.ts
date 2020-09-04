import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipies: Recipe[] = [
        // tslint:disable-next-line: max-line-length
        new Recipe(
            'A Test Recipe', 
            'This is a test', 
            'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        // tslint:disable-next-line: max-line-length
        new Recipe(
            'Another Test Recipe', 
            'This is a test', 
            'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
      ];

    getRecipes(): Recipe[] {
        return this.recipies.slice();
    }
}

import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
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

      constructor(
          private slService: ShoppingListService
      ) {}

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe{
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]): void{
        this.slService.addIngredienst(ingredients);
    }
}


import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { MenuCategory } from '../../models/menu.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuCategoryComponent {
  category = input.required<MenuCategory>();
}

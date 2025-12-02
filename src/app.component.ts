
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MenuCategory } from './models/menu.model';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MenuCategoryComponent, NgOptimizedImage]
})
export class AppComponent {
  menuData = signal<MenuCategory[]>([
    {
      title: 'MATE A SUA FOME',
      subtitle: 'ESPECIAIS FIM DE ANO',
      items: [
        { name: 'LOMBO RECHEADO', price: '95,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/10/300/200' },
        { name: 'PORQUETA PURURUCA', price: '95,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/20/300/200' },
        { name: 'LAGARTO RECHEADO', price: '110,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/30/300/200' },
        { name: 'MAMINHA RECHEADA', price: '130,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/40/300/200' }
      ]
    },
    {
      title: 'MATE A SUA FOME',
      subtitle: 'CARNES DE BOI',
      items: [
        { name: 'COSTELA', description: ['DESOSSADA ASSADA NO BAFO'], price: '95,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/50/300/200' },
        { name: 'FRALDINHA', description: ['ASSADA NO BAFO'], price: '95,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/60/300/200' },
        { name: 'CUPIM', description: ['ASSADO NO BAFO'], price: '110,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/70/300/200' }
      ]
    },
     {
      title: 'MATE A SUA FOME',
      subtitle: 'FRANGOS',
      items: [
        { name: 'FRANGO COM BATATAS', price: '60,00', unit: 'un.', imageUrl: 'https://picsum.photos/id/80/300/200' },
        { name: 'COXA COM SOBRE COXA', price: '45,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/90/300/200' }
      ]
    },
    {
      title: 'MATE A SUA FOME',
      subtitle: 'PORCOS PURURUCA',
      items: [
        { name: 'COSTELINHA', price: '80,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/11/300/200' },
        { name: 'PANCETA', price: '80,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/21/300/200' },
        { name: 'JOELHO', price: '80,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/31/300/200' },
        { name: 'PERNIL', price: '80,00', unit: 'Kg', imageUrl: 'https://picsum.photos/id/41/300/200' }
      ]
    },
    {
      title: 'MATE A SUA FOME',
      subtitle: 'ESPECIAIS FIM DE ANO',
      items: [
        { name: 'FRANGO RECHEADO', price: '75,00', unit: 'un.', imageUrl: 'https://picsum.photos/id/51/300/200' },
        { name: 'CHESTER RECHEADO', price: '130,00', unit: 'un.', imageUrl: 'https://picsum.photos/id/61/300/200' },
        { name: 'TENDER C/ MOLHO DE MARACUJÁ', price: '90,00', unit: 'un.', imageUrl: 'https://picsum.photos/id/71/300/200' },
        { name: 'FAROFA NATALINA', price: '18,00', unit: 'pote 500 gr', imageUrl: 'https://picsum.photos/id/81/300/200' }
      ]
    },
    {
      title: 'MATE A SUA FOME',
      subtitle: 'ACOMPANHAMENTOS',
      items: [
        { name: 'SALADA DE MAIONESE', price: '20,00', unit: 'pote 500 gr', imageUrl: 'https://picsum.photos/id/12/300/200' },
        { name: 'SALPICÃO', price: '25,00', unit: 'pote 500 gr', imageUrl: 'https://picsum.photos/id/22/300/200' },
        { name: 'FAROFA CASEIRA', price: '10,00', unit: 'pote 500 gr', imageUrl: 'https://picsum.photos/id/32/300/200' },
        { name: 'FEIJÃO TROPEIRO', price: '15,00', unit: 'pote 500 gr', imageUrl: 'https://picsum.photos/id/42/300/200' }
      ]
    },
     {
      title: 'MATE A SUA FOME',
      subtitle: 'MASSAS E MOLHOS',
      items: [
        { name: 'CANELONE', description: ['FRANGO C/ CREME DE QUEIJO', 'BRÓCOLIS E PARMESÃO', 'PRESUNTO E QUEIJO', '4 QUEIJOS'], price: '40,00', unit: '12 UNIDADES', imageUrl: 'https://picsum.photos/id/52/300/200' },
        { name: 'CONCHIGLIONE', description: ['ESPINAFRE COM RICOTA', '4 QUEIJOS', 'ALHO PORÓ, BACON E QUEIJO'], price: '42,00', unit: '12 UNIDADES', imageUrl: 'https://picsum.photos/id/62/300/200' },
        { name: 'SOFIOLI', description: ['CARNE SECA C/ CREME DE QUEIJO', 'PRESUNTO E QUEIJO'], price: '41,00', unit: '15 UNIDADES', imageUrl: 'https://picsum.photos/id/72/300/200' },
        { name: 'PANQUECA', description: ['FRANGO E REQUEIJÃO', 'CARNE'], price: '38,00', unit: '7 UNIDADES', imageUrl: 'https://picsum.photos/id/82/300/200' }
      ]
    },
     {
      title: 'MATE A SUA FOME',
      subtitle: 'MASSAS E MOLHOS',
      items: [
        { name: 'LASANHA', description: ['PRESUNTO E QUEIJO', 'BOLONHESA', '4 QUEIJOS', 'BERINGELA'], price: '38,00', unit: '500 GR', imageUrl: 'https://picsum.photos/id/92/300/200' },
        { name: 'NHOQUE', description: ['BATATA'], price: '25,00', unit: '500 GR', imageUrl: 'https://picsum.photos/id/13/300/200' },
        { name: 'NHOQUE', description: ['MANDIOCA'], price: '23,00', unit: '500 GR', imageUrl: 'https://picsum.photos/id/23/300/200' },
        { name: 'NHOQUE', description: ['MANDIOQUINHA'], price: '30,00', unit: '500 GR', imageUrl: 'https://picsum.photos/id/33/300/200' }
      ]
    },
    {
      title: 'MATE A SUA FOME',
      subtitle: 'MASSAS E MOLHOS',
      items: [
        { name: 'NHOCÃO RECHEADO', description: ['4 QUEIJOS'], price: '40,00', unit: '500 gr', imageUrl: 'https://picsum.photos/id/43/300/200' },
        { name: 'MOLHOS', description: ['SUGO'], price: '15,00', unit: '500 ml', imageUrl: 'https://picsum.photos/id/53/300/200' },
        { name: 'MOLHOS', description: ['BOLONHESA'], price: '20,00', unit: '500 ml', imageUrl: 'https://picsum.photos/id/63/300/200' },
        { name: 'MOLHOS', description: ['BRANCO'], price: '18,00', unit: '500 ml', imageUrl: 'https://picsum.photos/id/73/300/200' },
        { name: 'TORTAS', description: ['FRANGO/REQUEIJÃO'], price: '32,00', unit: '500 GR', imageUrl: 'https://picsum.photos/id/83/300/200' },
        { name: 'TORTAS', description: ['PALMITO'], price: '36,00', unit: '500 GR', imageUrl: 'https://picsum.photos/id/93/300/200' }
      ]
    },
    {
      title: 'MATE A SUA FOME',
      subtitle: 'REFRIGERANTES',
      items: [
        { name: 'REFRIGERANTES', description: ['2 LITROS'], price: '15,00', unit: '', imageUrl: 'https://picsum.photos/id/14/300/200' },
        { name: 'REFRIGERANTES', description: ['600 ML'], price: '9,00', unit: '', imageUrl: 'https://picsum.photos/id/24/300/200' },
        { name: 'REFRIGERANTES', description: ['LATA'], price: '6,00', unit: '', imageUrl: 'https://picsum.photos/id/34/300/200' },
        { name: 'REFRIGERANTES', description: ['MINI'], price: '3,00', unit: '', imageUrl: 'https://picsum.photos/id/44/300/200' }
      ]
    },
    {
      title: 'MATE A SUA FOME',
      subtitle: 'CERVEJAS',
      items: [
        { name: 'CERVEJAS', description: ['LONG NECK'], price: '12,00', unit: '', imageUrl: 'https://picsum.photos/id/54/300/200' },
        { name: 'CERVEJAS LATA', description: ['SKOL E BRAHMA'], price: '6,00', unit: '', imageUrl: 'https://picsum.photos/id/64/300/200' },
        { name: 'CERVEJAS LATA', description: ['ITAIPAVA'], price: '5,00', unit: '', imageUrl: 'https://picsum.photos/id/74/300/200' },
        { name: 'CERVEJAS LATA', description: ['PURO MALTE'], price: '7,00', unit: '', imageUrl: 'https://picsum.photos/id/84/300/200' }
      ]
    }
  ]);
}

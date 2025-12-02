
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { MenuCategory, MenuItem } from '../../models/menu.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuCategoryComponent {
  category = input.required<MenuCategory>();

  buildWhatsAppLink(item: MenuItem): string {
    if (item.whatsappLink) return item.whatsappLink;
    const base = 'https://wa.me/5535997723632?text=';
    const msg = `Gostaria de reservar o produto ${item.name}, a quantidade é ...`;
    return base + encodeURIComponent(msg);
  }

  resolveImageUrl(item: MenuItem): string {
    const base = 'https://tkexuycidlzsafjjzbpd.supabase.co/storage/v1/object/public/Grill%20Nota%20Mil/cardapio_fim_ano_midias/';
    const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    const n = normalize(item.name);

    const fileByName: Record<string, string> = {
      'canelone': 'Canelone.png',
      'chester recheado': 'Chester Recheado.png',
      'conchiglione': 'Conchiglione.png',
      'costela desossada': 'Costela Desossada.png',
      'costelinha': 'Costelinha Suina.png',
      'costelinha suina': 'Costelinha Suina.png',
      'coxa com sobre coxa': 'Coxa com Sobre Coxa.png',
      'cupim': 'Cupin.png',
      'cupin': 'Cupin.png',
      'farofa caseira': 'Farofa Caseira.png',
      'farofa natalina': 'Farofa Natalina.png',
      'feijao tropeiro': 'Feijao Tropeiro.png',
      'frango recheado': 'Frango Recheado.png',
      'frango com batatas': 'Frango com Batatas.png',
      'fraldinha': 'Fraudinha Assada.png',
      'fraudinha assada': 'Fraudinha Assada.png',
      'joelho': 'Joelho de Porco.png',
      'joelho de porco': 'Joelho de Porco.png',
      'lagarto recheado': 'Lagarto Recheado.png',
      'lombo recheado': 'Lombo Recheado.png',
      'maionese': 'Maionese.png',
      'maminha recheada': 'Maminha Recheada.png',
      'porqueta': 'Porqueta.png',
      'porqueta pururuca': 'Porqueta.png',
      'panceta': 'Panceta.png',
      'panqueca': 'Panqueca.png',
      'pernil': 'Pernil.png',
      'salpicao': 'Salpicao.png',
      'sofili': 'Sofili.png',
      'sofioli': 'Sofili.png',
      'tender c/ molho de maracuja': 'Tender com Molho de Maracuja.png',
      'tender com molho de maracuja': 'Tender com Molho de Maracuja.png',
      'torta franco requeijao': 'Torta Franco Requeijao.png',
      'torta palmito': 'Torta Palmito.png',
      'nhocao recheado': 'Nhocao Recheadp.png'
    };

    if (n === 'molhos' && item.description && item.description.length) {
      const d = normalize(item.description[0]);
      if (d.includes('sugo')) return base + 'Molho ao Sugo.png';
      if (d.includes('bolonhesa') || d.includes('bolhonhesa')) return base + 'Molho a Bolhonhesa.png';
      if (d.includes('branco')) return base + 'Molho a Branco.png';
    }

    if (n === 'nhoque' && item.description && item.description.length) {
      const d = normalize(item.description[0]);
      if (d.includes('mandioca')) return base + 'Nhoque de Madioca.png';
      if (d.includes('mandioquinha')) return base + 'Nhoque de Madioquinha.png';
    }

    const file = fileByName[n];
    return file ? base + file : item.imageUrl;
  }
}

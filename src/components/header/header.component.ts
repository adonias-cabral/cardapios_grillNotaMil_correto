
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  logoUrl = 'https://tkexuycidlzsafjjzbpd.supabase.co/storage/v1/object/public/Grill%20Nota%20Mil/cardapio_fim_ano_midias/Logo%20Centralizado.png';
}

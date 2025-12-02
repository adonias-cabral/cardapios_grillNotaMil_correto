
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  logoUrl = 'https://tkexuycidlzsafjjzbpd.supabase.co/storage/v1/object/public/Grill%20Nota%20Mil/cardapio_fim_ano_midias/Logo%20Centralizado.png';
}

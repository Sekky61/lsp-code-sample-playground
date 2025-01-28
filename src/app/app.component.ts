import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';

import { PrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

@Component({
    selector: 'app-root',
    imports: [InputTextModule, InputSwitchModule, ButtonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lsp-code-sample-playground';

  constructor(private primeng: PrimeNG) {
      this.primeng.theme.set({
          preset: Aura,
          options: {
              cssLayer: {
                  name: 'primeng',
                  order: 'tailwind-base, primeng, tailwind-utilities'
              }
          }
      })
  }
}

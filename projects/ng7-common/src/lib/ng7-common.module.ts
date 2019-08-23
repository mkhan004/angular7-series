import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { Ng8MaterialModule } from '@ng8/material';

@NgModule({
  declarations: [FooterComponent, TopNavComponent],
  imports: [Ng8MaterialModule],
  exports: [FooterComponent, TopNavComponent] // <-------------
})
export class Ng7CommonModule {}

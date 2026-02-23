import { DataAccessService } from '@wegrowupupup/data-access';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'web';
  protected dataAccessService = inject(DataAccessService);
  protected userResource = this.dataAccessService.userResource;
}

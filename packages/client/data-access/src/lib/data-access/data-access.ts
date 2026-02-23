import { User } from '@wegrowupupup/datatypes';
import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  userResource = httpResource<User>(() => '/api');
}

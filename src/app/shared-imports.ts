import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { NgClass, AsyncPipe } from '@angular/common';
import { CustomDatePipe } from './pipes/custom-date-pipe';

export const SHARED_IMPORTS = [
  TranslatePipe,
  TranslateDirective,
  NgClass,
  AsyncPipe,
  CustomDatePipe,
] as const;

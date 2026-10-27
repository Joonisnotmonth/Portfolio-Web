import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { NgClass, AsyncPipe } from '@angular/common';
import { CustomDatePipe } from './pipes/custom-date-pipe';
import { RouterLink } from '@angular/router';

export const SHARED_IMPORTS = [
  TranslatePipe,
  TranslateDirective,
  NgClass,
  AsyncPipe,
  CustomDatePipe,
  RouterLink,
] as const;

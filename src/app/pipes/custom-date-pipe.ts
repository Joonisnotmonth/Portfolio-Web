import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

type DateFormat = 'month-year' | 'year' | 'date-month-year-time' | 'date-month-year';

@Pipe({
  name: 'customDate',
  standalone: true,
  pure: false, // สำคัญ: ให้คำนวณใหม่เมื่อภาษาเปลี่ยน
})
export class CustomDatePipe implements PipeTransform {
  private languageService = inject(LanguageService);

  transform(value: Date | string | null | undefined, format: DateFormat = 'month-year'): string {
    if (!value) return '';

    const date = new Date(value);
    if (isNaN(date.getTime())) return '';

    // th-TH = ปี พ.ศ. + เดือนไทย, en-US = ปี ค.ศ. + เดือนอังกฤษ
    const locale = this.languageService.currentLang() === 'th' ? 'th-TH' : 'en-US';

    switch (format) {
      case 'year':
        return date.toLocaleDateString(locale, { year: 'numeric' });

      case 'date-month-year':
        return date.toLocaleDateString(locale, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });

      case 'date-month-year-time':
        return date.toLocaleString(locale, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });

      case 'month-year':
      default:
        return date.toLocaleDateString(locale, {
          month: 'long',
          year: 'numeric',
        });
    }
  }
}

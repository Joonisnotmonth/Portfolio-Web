import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
  standalone: true,
})
export class CustomDatePipe implements PipeTransform {
  transform(
    value: Date | string | null | undefined,
    format: 'month-year' | 'year' | 'date-month-year-time' | 'date-month-year' = 'month-year',
  ): string {
    if (!value) return '';
    const date = new Date(value);

    switch (format) {
      case 'year':
        // ตัวอย่าง: 2026 (หรือ 2569 ถ้าใช้ th-TH)
        return date.toLocaleDateString('th-TH', {
          year: 'numeric',
        });

      case 'date-month-year':
        // ตัวอย่าง: 15 ตุลาคม 2569
        return date.toLocaleDateString('th-TH', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });

      case 'date-month-year-time':
        // ตัวอย่าง: 15 ตุลาคม 2569, 14:30
        return date.toLocaleDateString('th-TH', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });

      case 'month-year':
      default:
        // ตัวอย่าง: ตุลาคม 2569
        return date.toLocaleDateString('th-TH', {
          month: 'long',
          year: 'numeric',
        });
    }
  }
}

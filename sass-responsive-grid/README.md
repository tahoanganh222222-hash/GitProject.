# Tái cấu trúc responsive-grid sang Sass

Mã HTML gốc được lưu trong `source/responsive_grid_original.htm`. Bản `index.html` giữ ví dụ lưới responsive, nhưng chuyển các kiểu inline sang class để stylesheet được quản lý hoàn toàn bằng SCSS.

## Cấu trúc SCSS

- `scss/abstracts/`: biến và mixin dùng chung.
- `scss/base/`: reset và kiểu nền tảng.
- `scss/layout/`: các quy tắc grid, row và cột.
- `scss/main.scss`: entry point dùng `@use`.
- `css/main.css`: CSS được biên dịch từ SCSS.

## Biên dịch

```bash
sass scss/main.scss css/main.css
```

Theo dõi và biên dịch tự động khi SCSS thay đổi:

```bash
sass scss/main.scss css/main.css --watch
```

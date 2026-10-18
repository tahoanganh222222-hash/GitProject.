# Chuyển CSS sang Sass theo cấu trúc partials

## Cấu trúc

- `scss/abstracts/`: biến và mixin dùng chung.
- `scss/base/`: kiểu nền tảng của trang.
- `scss/layout/`: bố cục container.
- `scss/components/`: nút và card.
- `scss/main.scss`: điểm vào Sass, nạp các partial bằng `@use`.
- `css/main.css`: CSS được biên dịch từ `scss/main.scss`.
- `styles-original.css`: CSS ban đầu trong đề để đối chiếu.

## Biên dịch

Trong thư mục dự án, chạy:

```bash
sass scss/main.scss css/main.css
```

Để tự động biên dịch khi chỉnh SCSS:

```bash
sass scss/main.scss css/main.css --watch
```

Mở `index.html` để xem CSS đã biên dịch được áp dụng. Dự án dùng `@use` thay cho `@import` để nạp các module Sass.

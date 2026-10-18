# Thực hành Sass Variables và Mixins

Các biến giao diện nằm trong `scss/abstracts/_variables.scss`. Mixins dùng chung được định nghĩa trong `scss/abstracts/_mixins.scss` và được sử dụng ở các partial typography, button và card.

## Cấu trúc

- `scss/abstracts/`: biến và mixins.
- `scss/base/`: typography.
- `scss/components/`: button và card.
- `scss/main.scss`: điểm vào Sass dùng `@use`.
- `styles-original.css`: CSS ban đầu để đối chiếu.
- `css/main.css`: stylesheet đã biên dịch.

## Biên dịch / theo dõi

```bash
sass scss/main.scss css/main.css
sass scss/main.scss css/main.css --watch
```

Mở `index.html` để xem kết quả. Nhấn `Ctrl+C` trong terminal để dừng watch mode.

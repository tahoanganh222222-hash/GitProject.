# Thực hành SASS bằng npm và Sass CLI

## Điều kiện

- Node.js và npm cần được cài sẵn.
- Sass CLI được cài toàn cục bằng `npm install -g sass`.
- Kiểm tra công cụ bằng `node -v`, `npm -v`, `sass --version`.

## Biên dịch một file

Từ thư mục dự án:

```bash
sass scss/main.scss css/main.css
```

## Tự biên dịch khi SCSS thay đổi

```bash
sass scss/main.scss css/main.css --watch
```

Nhấn `Ctrl+C` để dừng chế độ theo dõi.

## Biên dịch nhiều file trong thư mục

```bash
sass scss/:css/
```

Tự động theo dõi cả thư mục:

```bash
sass scss/:css/ --watch
```

Lệnh thư mục tạo `main.css` và `theme.css`; các file partial bắt đầu bằng dấu gạch dưới được Sass bỏ qua làm đầu ra riêng.

## Thực hành thay đổi

Sửa màu hoặc khoảng cách trong `scss/partials/_tokens.scss`, rồi quan sát Sass biên dịch lại `css/main.css` khi đang bật `--watch`. `index.html` liên kết tới stylesheet đã biên dịch tại `css/main.css`.

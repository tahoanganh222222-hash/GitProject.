# Tái cấu trúc Landing Page bằng Sass

Bài này sử dụng Landing Page đã làm trong thư mục website-template-advanced làm nền. Bản sao HTML và tài nguyên hình ảnh nằm trong thư mục này; stylesheet CSS ban đầu được giữ ở source-style.css để đối chiếu.

## Cấu trúc

- index.html: Landing Page gồm header/navigation, phần nổi bật, số liệu thống kê và footer.
- scss/abstracts/_variables.scss: màu sắc dùng chung.
- scss/abstracts/_mixins.scss: mixins tạo khoảng cách ngang và padding section.
- scss/base/_base.scss: kiểu nền tảng.
- scss/pages/_landing.scss: bố cục, nesting và responsive.
- scss/main.scss: điểm vào SCSS.
- css/main.css: CSS được biên dịch để trình duyệt sử dụng.
- source-style.css: bản CSS trước khi tái cấu trúc.

## Biên dịch

Chạy từ thư mục dự án:

sass scss/main.scss css/main.css

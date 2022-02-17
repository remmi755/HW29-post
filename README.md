Создайте на вашем github репозиторий по следующему шаблону HW#-name. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.
Создайте index.html в котором подключите js script.
Создайте README.md с описанием задания.
Подготовка
Установить:
https://nodejs.org/uk/  - LTS версию
Затем выполнить в консоле npm install -g json-server
Создайте в папке с заданием:
Создайте папку db
Создайте в папке db json файл с именем db.json. В который поместите содержимое https://gist.github.com/OlegRovenskyi/aa46991929859d3ef8ecb80c7fb7af86. Должны получить следующую структуру: db/db.json
Чтобы запустить сервер нужно в консоли или терминале зайти в папку с файлом db.json и запустить команд: json-server --watch db.json
чтобы остановить сервер нажмите вместе комбинацию клавиш в консоли: CTRL C
Макет https://drive.google.com/file/d/1R0wzF4b89_h--uF1Zzuh2CtMnIyWv5gB/view?usp=sharing
Про получение связанных данный описано в документации https://github.com/typicode/json-server#relationships.
Для дизайна использовать библиотеку antd для react.
Для работы с HTTP request использовать библиотеку axios.
При загрузке страницы нужно вывести информацию по всем постам.
При клике по посту нужно сделать редирект на страницу поста.
На странице поста реализовать добавление комментариев.
При клике на Edit в верхнем углу поста на главной странице, должен происходить редирект на страницу поста в режиме редактирования.
На всех страницах под header находится breadcrumbs.
Для отображения информации используйте макет.

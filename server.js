import express from 'express';
import multer from 'multer';
import cors from 'cors';

// Инициализация приложения
const app = express();

// Разрешаем CORS для фронтенда
app.use(cors());

// Настройка хранения файлов с помощью Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Папка для хранения изображений (можно настроить как нужно)
        cb(null, 'src/assets/img/');
    },
    filename: (req, file, cb) => {
        // Генерация уникального имени для файла
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Маршрут для загрузки файлов
app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        res.json({ message: 'Файл успешно загружен!', filename: req.file.filename });
    } else {
        res.status(400).send('Ошибка загрузки файла');
    }
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});

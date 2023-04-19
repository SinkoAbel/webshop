// seeds.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from './models/User.js';
import Product from './models/Product.js';
import Category from './models/Category.js';
import dotenv from "dotenv";

const users = [
    {
        username: 'admin',
        password: 'admin',
        email: 'admin@example.com',
    },
    {
        username: 'user1',
        password: 'user',
        email: 'user1@example.com',
    },

];

const categories = [
    {
        category_name: 'Electronics',
    },
    {
        category_name: 'Clothing',
    },
];

const products = [
    {
        product_name: 'Example Product 1',
        price: 100,
        stock: 10,
        category_name: 'Electronics',
        photo_path: 'path/to/photo1.jpg',
    },
    {
        product_name: 'Example Product 2',
        price: 200,
        stock: 20,
        category_name: 'Clothing',
        photo_path: 'path/to/photo2.jpg',
    },
];

async function seedDB() {
    dotenv.config();
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');

        // Töröljük a meglévő usereket
        await User.deleteMany();
        console.log('Users collection cleared');

        // Hozzáadjuk a teszt adatokat
        for (const userData of users) {
            const hashedPassword = await bcrypt.hash(userData.password, 12);
            const user = new User({ ...userData, password: hashedPassword });
            await user.save();
        }

        console.log('Test users added to the database');

        // Töröljük a meglévő kategóriákat és termékeket
        await Category.deleteMany();
        console.log('Categories collection cleared');
        await Product.deleteMany();
        console.log('Products collection cleared');

        // Hozzáadjuk a teszt kategóriákat
        const createdCategories = await Category.insertMany(categories);
        console.log('Test categories added to the database');

        // KÉszítünk egy category_name -> _id map -et
        const categoryNameToIdMap = new Map();
        createdCategories.forEach(category => {
            categoryNameToIdMap.set(category.category_name, category._id);
        });

        // Hozzárendeljük a category_id -ét a termék category_name mezőjéhez
        const productsWithCategoryId = products.map(product => ({
            ...product,
            category_id: categoryNameToIdMap.get(product.category_name),
        }));

        // Hozzáadjuk a teszt termékeket
        await Product.insertMany(productsWithCategoryId);
        console.log('Products added to the database');

        await mongoose.disconnect();
    } catch (error) {
        console.error('Error seeding the database:', error);
    }

}

seedDB();

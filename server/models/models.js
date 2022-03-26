const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})





const Book = sequelize.define('books', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
    pdf:{type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Autor = sequelize.define('autor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const BookInfo = sequelize.define('book_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeAutor = sequelize.define('type_Autor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasMany(Rating)
Rating.belongsTo(User)


Type.hasMany(Book)
Book.belongsTo(Type)

Autor.hasMany(Book)
Book.belongsTo(Autor)

Book.hasMany(Rating)
Rating.belongsTo(Book)


Book.hasMany(BookInfo, {as: 'info'});
BookInfo.belongsTo(Book)

Type.belongsToMany(Autor, {through: TypeAutor })
Autor.belongsToMany(Type, {through: TypeAutor })

module.exports = {
    User,
    Book,
    Type,
    Autor,
    Rating,
    TypeAutor,
    BookInfo
}
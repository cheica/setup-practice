# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Cake.destroy_all

puts("USER SEEDING STARTING")

allen = User.create(name:"Allen") 

eva = User.create(name:"Eva") 

chelsea = User.create(name:"Chelsea") 

puts("USER SEEDING DONE")


puts("CAKE SEEDING STARTING")

leches = Cake.create(name: "Tres leches", image: "https://littlespicejar.com/wp-content/uploads/2021/04/Easy-Scratch-Tres-Leches-Cake-18-scaled-735x1102.jpg",  ingredients: "1 ½ cups all-purpose flour, 1 teaspoon baking powder, ½ cup unsalted butter, 1 cup white sugar, 5 eggs, ½ teaspoon vanilla extract, 2 cups whole milk, 1 (14 ounce) can sweetened condensed milk, 1 (12 fluid ounce) can evaporated milk, 1 ½ cups heavy whipping cream, 1 cup white sugar, 1 teaspoon vanilla extract", user_id: allen.id)

red = Cake.create(name: "Red Velvet Cake", image: "https://thescranline.com/wp-content/uploads/2021/03/Red-Velvet-Cake.jpg", ingredients: "2 and 2/3 cups cake flour (spooned & leveled), 1/4 cup natural unsweetened cocoa powder, 1 teaspoon baking soda, 1/2 teaspoon salt, 1/2 cup unsalted butter softened to room temperature, 1 and 3/4 cups granulated sugar, 2 large eggs room temperature, 1/2 cup canola or vegetable oil, 1 (1-ounce) bottle liquid red food color, 2 teaspoons pure vanilla extract, 1 teaspoon distilled white vinegar, 1 and 1/3 cups buttermilk room temperature", user_id: eva.id)

black_for = Cake.create(name: "Black Forest Cake", image: "https://thescranline.com/wp-content/uploads/2021/07/Black-Forest-Cake-01.jpg", ingredients: "2 cup all-purpose flour, 2 cups granulated sugar, 3/4 cup Dutch-processed cocoa powder sifted, 2 tsp baking soda, 1 tsp baking powder, 1 tsp salt, 1/2 cup vegetable oil, 1 cup buttermilk room temperature, 1 cup hot water, 2 large eggs, 2 tsp vanilla", user_id: chelsea.id)

straw_short = Cake.create(name: "Strawberry Shortcake", image: "https://lilluna.com/wp-content/uploads/2020/01/easy-strawberry-shortcake-4-scaled.jpg", ingredients: "1 quart fresh strawberries - sliced, ¼ cup white sugar, 1 (12 ounce) package prepared sponge cake dessert cups, 1 (7 ounce) can whipped cream or to taste", user_id: allen.id)


puts("CAKE SEEDING DONE")


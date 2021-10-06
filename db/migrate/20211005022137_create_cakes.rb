class CreateCakes < ActiveRecord::Migration[6.1]
  def change
    create_table :cakes do |t|
      t.string :name
      t.string :image
      t.string :ingredients
      t.integer :user_id

      t.timestamps
    end
  end
end

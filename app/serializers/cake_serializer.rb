class CakeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :ingredients, :user_id
end

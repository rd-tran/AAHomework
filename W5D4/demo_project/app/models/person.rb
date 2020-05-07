class Person < ApplicationRecord
  validates :name, presence: true
  validates :house_id, presence: true

  belongs_to :address,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: :House
end
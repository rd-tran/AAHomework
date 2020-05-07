# == Schema Information
#
# Table name: people
#
#  id       :bigint           not null, primary key
#  name     :string           not null
#  house_id :string           not null
#
class Person < ApplicationRecord
  validates :name, presence: true
  validates :house_id, presence: true

  belongs_to :address,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: :House
end

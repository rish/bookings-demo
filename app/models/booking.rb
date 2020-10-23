class Booking < ApplicationRecord
  include Filterable
  scope :filter_by_space_id, -> (space_id) { where space_id: space_id}

  belongs_to :space
end

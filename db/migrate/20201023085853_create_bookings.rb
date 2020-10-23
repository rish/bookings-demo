class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.string :name
      t.string :description
      t.date :start_date
      t.date :end_date
      t.references :space, null: false, foreign_key: true

      t.timestamps
    end
  end
end

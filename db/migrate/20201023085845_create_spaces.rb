class CreateSpaces < ActiveRecord::Migration[6.0]
  def change
    create_table :spaces do |t|
      t.string :name
      t.references :building, null: false, foreign_key: true

      t.timestamps
    end
  end
end

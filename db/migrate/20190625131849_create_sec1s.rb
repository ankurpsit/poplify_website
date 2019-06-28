class CreateSec1s < ActiveRecord::Migration[5.2]
  def change
    create_table :sec1s do |t|
      t.text :head

      t.timestamps
    end
  end
end

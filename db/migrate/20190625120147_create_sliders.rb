class CreateSliders < ActiveRecord::Migration[5.2]
  def change
    create_table :sliders do |t|
      t.string :heading
      t.text :paragraph

      t.timestamps
    end
  end
end

class AddPaperclipFieldsToSec1 < ActiveRecord::Migration[5.2]
  def change
  	add_column :sec1s, :image_file_name,    :string
    add_column :sec1s, :image_content_type, :string
    add_column :sec1s, :image_file_size,    :integer
    add_column :sec1s, :image_updated_at,   :datetime
  end
end

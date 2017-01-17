class CreateResumes < ActiveRecord::Migration[5.0]
  def change
    create_table :resumes do |t|
      t.string :fullname
      t.string :current_title
      t.string :email
      t.string :phone
      t.string :site
      t.string :profile
      t.string :job_title
      t.string :company
      t.string :date
      t.string :description
      t.string :skills
      t.string :education
      t.string :edu_description

      t.timestamps
    end
  end
end

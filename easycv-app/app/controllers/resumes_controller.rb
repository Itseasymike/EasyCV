class ResumesController < ApplicationController
   layout 'reslayout'
  def index
    render :layout => 'site_layout'
  end

  def create
    resume = params[:resume]
    @resume = Resume.create(fullname: resume['fullname'],
                  current_title: resume['current_title'],
                  email: resume['email'],
                  phone: resume['phone'],
                  site: resume['site'],
                  profile: resume['profile'],
                  job_title: resume['job_title'],
                  company: resume['company'],
                  date: resume['date'],
                  description: resume['description'],
                  skills:resume['skills'],
                  education: resume['education'],
                  edu_description: resume['edu_description'])
    # redirect_to "/resumes/"+ params[:id]
     redirect_to "/resumes/#{@resume.id}"
  end

  def update
    @resume = params[:resume]
    Resume.update(fullname: resume['fullname'],
                  current_title: resume['current_title'],
                  email: resume['email'],
                  phone: resume['phone'],
                  site: resume['site'],
                  profile: resume['profile'],
                  job_title: resume['job_title'],
                  company: resume['company'],
                  date: resume['date'],
                  description: resume['description'],
                  skills:resume['skills'],
                  education: resume['education'],
                  edu_description: resume['edu_description'])
    redirect_to '/resumes'
  end

  def destroy
    Resume.destroy(params[:id])
    redirect_to '/resumes'
  end

  # wicked_pdf gem setup
  def show
    @resume = Resume.find_by(id: params[:id])
    respond_to do |format|
      format.html
      format.pdf do
        render pdf: 'your_resume',
               template: 'resumes/show.html.erb',
               layout: 'pdf.html.erb'
               # show_as_html: params[:debug].present?
      end
    end
  end

end

var search_data = {"index":{"searchIndex":["activesupport","testcase","api","v1","taskscontroller","taskscontrollertest","userscontroller","apikey","apikeytest","applicationcontroller","applicationhelper","bson","objectid","logger","mongoid","document","object","task","tasktest","todo","application","user","as_json()","as_json()","authenticated?()","create()","create()","current_user?()","destroy()","destroy()","digest()","index()","index()","new_token()","respond_with_error()","show()","update()","update()","gemfile","gemfile.lock","readme","readme","rakefile","_task.json.jbuilder","create.json.jbuilder","index.json.jbuilder","create.json.jbuilder","_error_messages.json.jbuilder","config.ru","development.log","404.html","422.html","500.html","favicon.ico","robots","server.pid"],"longSearchIndex":["activesupport","activesupport::testcase","api","api::v1","api::v1::taskscontroller","api::v1::taskscontrollertest","api::v1::userscontroller","apikey","apikeytest","applicationcontroller","applicationhelper","bson","bson::objectid","logger","mongoid","mongoid::document","object","task","tasktest","todo","todo::application","user","bson::objectid#as_json()","mongoid::document#as_json()","user#authenticated?()","api::v1::taskscontroller#create()","api::v1::userscontroller#create()","applicationhelper#current_user?()","api::v1::taskscontroller#destroy()","api::v1::userscontroller#destroy()","user::digest()","api::v1::taskscontroller#index()","api::v1::userscontroller#index()","user::new_token()","applicationhelper#respond_with_error()","api::v1::taskscontroller#show()","api::v1::taskscontroller#update()","api::v1::userscontroller#update()","","","","","","","","","","","","","","","","","",""],"info":[["ActiveSupport","","ActiveSupport.html","",""],["ActiveSupport::TestCase","","ActiveSupport/TestCase.html","",""],["Api","","Api.html","",""],["Api::V1","","Api/V1.html","",""],["Api::V1::TasksController","","Api/V1/TasksController.html","",""],["Api::V1::TasksControllerTest","","Api/V1/TasksControllerTest.html","",""],["Api::V1::UsersController","","Api/V1/UsersController.html","",""],["ApiKey","","ApiKey.html","",""],["ApiKeyTest","","ApiKeyTest.html","",""],["ApplicationController","","ApplicationController.html","",""],["ApplicationHelper","","ApplicationHelper.html","",""],["BSON","","BSON.html","",""],["BSON::ObjectId","","BSON/ObjectId.html","",""],["Logger","","Logger.html","",""],["Mongoid","","Mongoid.html","",""],["Mongoid::Document","","Mongoid/Document.html","",""],["Object","","Object.html","",""],["Task","","Task.html","",""],["TaskTest","","TaskTest.html","",""],["Todo","","Todo.html","",""],["Todo::Application","","Todo/Application.html","",""],["User","","User.html","",""],["as_json","BSON::ObjectId","BSON/ObjectId.html#method-i-as_json","(options = {})",""],["as_json","Mongoid::Document","Mongoid/Document.html#method-i-as_json","(options={})",""],["authenticated?","User","User.html#method-i-authenticated-3F","(attribute, token)",""],["create","Api::V1::TasksController","Api/V1/TasksController.html#method-i-create","()",""],["create","Api::V1::UsersController","Api/V1/UsersController.html#method-i-create","()",""],["current_user?","ApplicationHelper","ApplicationHelper.html#method-i-current_user-3F","(user)","<p>Returns true if the given user is the current user.\n"],["destroy","Api::V1::TasksController","Api/V1/TasksController.html#method-i-destroy","()",""],["destroy","Api::V1::UsersController","Api/V1/UsersController.html#method-i-destroy","()",""],["digest","User","User.html#method-c-digest","(string)","<p>Returns the hash digest of the given string\n"],["index","Api::V1::TasksController","Api/V1/TasksController.html#method-i-index","()",""],["index","Api::V1::UsersController","Api/V1/UsersController.html#method-i-index","()",""],["new_token","User","User.html#method-c-new_token","()","<p>Returns a random token.\n"],["respond_with_error","ApplicationHelper","ApplicationHelper.html#method-i-respond_with_error","(object)","<p>Returns errors of object in json format.\n"],["show","Api::V1::TasksController","Api/V1/TasksController.html#method-i-show","()",""],["update","Api::V1::TasksController","Api/V1/TasksController.html#method-i-update","()",""],["update","Api::V1::UsersController","Api/V1/UsersController.html#method-i-update","()",""],["Gemfile","","Gemfile.html","","<p>source &#39;rubygems.org&#39;\n<p>gem &#39;rails&#39;, &#39;4.2.0.beta4&#39; gem &#39;rails-api&#39; gem\n&#39;spring&#39;, …\n"],["Gemfile.lock","","Gemfile_lock.html","","<p>GIT\n\n<pre>remote: git://github.com/ahoward/mongoid-grid_fs.git\nrevision: 9ab0ca49add11a276c87c3e5da15fb0e282fcff7 ...</pre>\n"],["README","","README_md.html","","<p>ToDo App Rails Api\n<p>Database Schema\n<p>editor.ponyorm.com/user/david_lui/Todo\n"],["README","","README_rdoc.html","","<p>README\n<p>This README would normally document whatever steps are necessary to get the\napplication up and …\n"],["Rakefile","","Rakefile.html","","<p># Add your own tasks in files placed in lib/tasks ending in .rake, # for\nexample lib/tasks/capistrano.rake …\n"],["_task.json.jbuilder","","app/views/api/v1/tasks/_task_json_jbuilder.html","","<p>task ||= @task\n<p>json.id task.id json.title task.title json.completed task.completed\njson.created_at task.created_at …\n"],["create.json.jbuilder","","app/views/api/v1/tasks/create_json_jbuilder.html","","<p>task ||= @task\n<p>json.id task.id\n"],["index.json.jbuilder","","app/views/api/v1/tasks/index_json_jbuilder.html","","<p>json.tasks @tasks, partial: &#39;task&#39;, as: :task # json.total_count\n@tasks.respond_to?(:total_entries) …\n"],["create.json.jbuilder","","app/views/api/v1/users/create_json_jbuilder.html","","<p>user ||= @user\n<p>json.id user.id json.token user.api_key.token\n"],["_error_messages.json.jbuilder","","app/views/shared/_error_messages_json_jbuilder.html","","<p># json.messages object.errors.full_messages json.email\nobject.errors.full_messages json.status 400\n"],["config.ru","","config_ru.html","","<p># This file is used by Rack-based servers to start the application.\n<p>require ::File.expand_path(&#39;../config/environment&#39;, …\n"],["development.log","","log/development_log.html","","\n<pre class=\"ruby\"><span class=\"ruby-constant\">MOPED</span><span class=\"ruby-operator\">:</span> <span class=\"ruby-value\">127.0</span><span class=\"ruby-value\">.0</span><span class=\"ruby-value\">.1</span><span class=\"ruby-operator\">:</span><span class=\"ruby-value\">27017</span> <span class=\"ruby-constant\">COMMAND</span>      <span class=\"ruby-identifier\">database</span>=<span class=\"ruby-identifier\">admin</span> <span class=\"ruby-identifier\">command</span>={:<span class=\"ruby-identifier\">ismaster=</span><span class=\"ruby-operator\">&gt;</span><span class=\"ruby-value\">1</span>} <span class=\"ruby-identifier\">runtime</span><span class=\"ruby-operator\">:</span> <span class=\"ruby-value\">1.0280</span><span class=\"ruby-identifier\">ms</span>\n<span class=\"ruby-constant\">MOPED</span><span class=\"ruby-operator\">:</span> <span class=\"ruby-value\">127.0</span><span class=\"ruby-value\">.0</span><span class=\"ruby-value\">.1</span><span class=\"ruby-operator\">:</span><span class=\"ruby-value\">27017</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["404.html","","public/404_html.html","","<p>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;\n\n<pre>&lt;title&gt;The page you were looking for doesn&#39;t exist (404)&lt;/title&gt; ...</pre>\n"],["422.html","","public/422_html.html","","<p>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;\n\n<pre>&lt;title&gt;The change you wanted was rejected (422)&lt;/title&gt; ...</pre>\n"],["500.html","","public/500_html.html","","<p>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;\n\n<pre>&lt;title&gt;We&#39;re sorry, but something went wrong (500)&lt;/title&gt; ...</pre>\n"],["favicon.ico","","public/favicon_ico.html","",""],["robots","","public/robots_txt.html","","<p>See www.robotstxt.org/robotstxt.html for documentation on how to use the\nrobots.txt file\n<p>To ban all spiders …\n"],["server.pid","","tmp/pids/server_pid.html","","<p>3237\n"]]}}
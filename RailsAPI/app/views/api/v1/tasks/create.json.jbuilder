task ||= @task

json.id task.id
json.title task.title
json.completed task.completed
json.user_id task.user_id